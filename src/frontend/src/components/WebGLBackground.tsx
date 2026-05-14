/**
 * WebGLBackground — optimized Three.js background layer.
 *
 * Performance optimizations applied:
 *   - PARTICLE_COUNT reduced to 400 desktop, 0 mobile (disabled)
 *   - RING_COUNT = 0 (rings removed — shader workload removed)
 *   - BURST_COUNT = 20 (down from 70)
 *   - Rendering PAUSES while scrolling (10fps fallback), resumes 200ms after scroll stops
 *   - Single debounced scroll handler (not passive-every-frame)
 *   - Simplified shader during scroll (uScrolling uniform, no noise)
 *   - will-change: transform on canvas
 *   - Mobile: WebGL completely disabled (0 particles)
 *
 * CRITICAL: canvas always has pointer-events: none — this can never be changed.
 */

import { useEffect, useRef } from "react";
import * as THREE from "three";

// ─── Config ──────────────────────────────────────────────────────────────────
const PARTICLE_COUNT = 400; // was 1200
const SHAPE_SCALE = 1.4;
const SCROLL_ROT_STRENGTH = 0.003;
const MOUSE_TILT_STRENGTH = 0.35;
const BURST_COUNT = 20; // was 70
// RING_COUNT removed — 0 rings

const COLOR_TOP = 0xbfdbfe; // light blue (blue-200)
const COLOR_MID = 0x3b82f6; // blue-500
const COLOR_BOT = 0x2563eb; // blue-600
const PARTICLE_COLOR_ALT = 0x93c5fd; // blue-300

// ─── Types ────────────────────────────────────────────────────────────────────
interface BurstParticle {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  life: number;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function isMobile(): boolean {
  return (
    window.innerWidth < 768 || !window.matchMedia("(hover: hover)").matches
  );
}

function isPrefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function lerpColor(a: THREE.Color, b: THREE.Color, t: number): THREE.Color {
  return new THREE.Color(
    a.r + (b.r - a.r) * t,
    a.g + (b.g - a.g) * t,
    a.b + (b.b - a.b) * t,
  );
}

function getScrollColor(progress: number): THREE.Color {
  const top = new THREE.Color(COLOR_TOP);
  const mid = new THREE.Color(COLOR_MID);
  const bot = new THREE.Color(COLOR_BOT);
  if (progress <= 0.5) return lerpColor(top, mid, progress * 2);
  return lerpColor(mid, bot, (progress - 0.5) * 2);
}

// ─── Component ────────────────────────────────────────────────────────────────
export function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Completely disable on mobile — no WebGL overhead at all
    const mobile = isMobile();
    if (mobile) return;

    const reducedMotion = isPrefersReducedMotion();

    // ── Renderer ─────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xeff6ff, 0);

    // ── Scene + Camera ────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );
    camera.position.set(0, 0, 5);

    // ── Central shape ─────────────────────────────────────────────────────────
    const shapeGeo = new THREE.TorusKnotGeometry(1, 0.32, 96, 12, 2, 3);

    const shapeMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColorA: { value: new THREE.Color(COLOR_TOP) },
        uColorB: { value: new THREE.Color(COLOR_BOT) },
        uTintColor: { value: new THREE.Color(COLOR_TOP) },
        uScrollProgress: { value: 0 },
        uScrolling: { value: 0.0 }, // 1.0 while scrolling → simplified shader
        uGlowIntensity: { value: 1.0 },
      },
      vertexShader: /* glsl */ `
        varying vec3 vNormal;
        varying vec3 vPosition;
        uniform float uTime;
        uniform float uScrolling;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          vec3 pos = position;
          // Disable vertex displacement while scrolling (cheaper)
          float warp = 1.0 - uScrolling;
          pos += normal * 0.04 * sin(uTime * 1.2 + position.y * 3.0) * warp;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec3 vNormal;
        varying vec3 vPosition;
        uniform float uTime;
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        uniform vec3 uTintColor;
        uniform float uScrollProgress;
        uniform float uScrolling;
        uniform float uGlowIntensity;

        float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p) {
          vec2 i = floor(p); vec2 f = fract(p);
          float a = hash(i), b = hash(i + vec2(1,0)), c = hash(i + vec2(0,1)), d = hash(i + vec2(1,1));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
        }

        void main() {
          float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.5);
          float t = sin(uTime * 0.5) * 0.5 + 0.5;
          // Disable expensive noise while scrolling
          float noiseAmt = noise(vPosition.xy * 2.0 + uTime * 0.3) * 0.15 * (1.0 - uScrolling);
          vec3 baseCol = mix(uColorA, uColorB, t + noiseAmt);
          vec3 col = mix(baseCol, uTintColor, 0.55);
          float glow = fresnel * uGlowIntensity;
          float innerLight = max(0.0, dot(vNormal, vec3(0.3, 0.5, 0.8))) * 0.6;
          gl_FragColor = vec4(col * (glow + innerLight + 0.15), glow * 0.85 + 0.12);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.FrontSide,
    });

    const shape = new THREE.Mesh(shapeGeo, shapeMat);
    shape.scale.setScalar(SHAPE_SCALE);
    scene.add(shape);

    // Outer glow halo (desktop only, hidden during scroll)
    const haloGeo = new THREE.SphereGeometry(2.2, 24, 24);
    const haloMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(COLOR_TOP) },
        uScrolling: { value: 0.0 },
      },
      vertexShader: /* glsl */ `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec3 vNormal;
        uniform vec3 uColor;
        uniform float uTime;
        uniform float uScrolling;
        void main() {
          float rim = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 4.0);
          float pulse = 0.7 + 0.3 * sin(uTime * 0.8);
          // Fade halo out while scrolling
          float alpha = rim * 0.18 * (1.0 - uScrolling * 0.7);
          gl_FragColor = vec4(uColor * rim * pulse, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.BackSide,
    });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    scene.add(halo);

    // ── Particle field (reduced count) ────────────────────────────────────────
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const speeds = new Float32Array(PARTICLE_COUNT);

    const cyanColor = new THREE.Color(COLOR_TOP);
    const purpleColor = new THREE.Color(PARTICLE_COLOR_ALT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 10 - 2;
      const col = Math.random() > 0.5 ? cyanColor : purpleColor;
      colors[i3] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
      sizes[i] = Math.random() * 3 + 1;
      speeds[i] = Math.random() * 0.004 + 0.001;
    }

    const ptGeo = new THREE.BufferGeometry();
    ptGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    ptGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    ptGeo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const ptMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uScrollVel: { value: 0 },
        uScrolling: { value: 0.0 },
        uPixelRatio: { value: renderer.getPixelRatio() },
      },
      vertexShader: /* glsl */ `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vAlpha;
        uniform float uTime;
        uniform float uScrollVel;
        uniform float uScrolling;
        uniform float uPixelRatio;
        void main() {
          vColor = color;
          vec3 pos = position;
          // Skip per-particle drift while scrolling (uses simpler path)
          float drift = 1.0 - uScrolling;
          pos.y += sin(uTime * 0.3 + position.x * 0.5) * 0.06 * drift;
          pos.x += cos(uTime * 0.2 + position.z * 0.4) * 0.04 * drift;
          pos.y -= uScrollVel * 0.8 * (pos.z * 0.1 + 1.0);
          vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * uPixelRatio * (280.0 / -mvPos.z);
          gl_Position = projectionMatrix * mvPos;
          vAlpha = 0.35 + 0.3 * (pos.z + 5.0) / 10.0;
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = (1.0 - dist * 2.0) * vAlpha;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
    });

    const particles = new THREE.Points(ptGeo, ptMat);
    scene.add(particles);

    // ── State ─────────────────────────────────────────────────────────────────
    const state = {
      mouseX: 0,
      mouseY: 0,
      targetMouseX: 0,
      targetMouseY: 0,
      scrollY: 0,
      lastScrollY: 0,
      scrollVel: 0,
      scrollDir: 1,
      rotX: 0,
      rotY: 0,
      rotZ: 0,
      time: 0,
      rafId: 0,
      // Scroll pausing
      isScrolling: false,
      scrollStopTimer: 0,
      lastRenderTime: 0,
      frameCount: 0,
    };

    // Burst pool
    const burstParticles: BurstParticle[] = [];
    const burstGeo = new THREE.SphereGeometry(0.04, 4, 4);

    // ── Scroll: single debounced handler ─────────────────────────────────────
    let scrollDebounceTimer = 0;

    function onScroll() {
      const sy = window.scrollY;
      state.scrollVel = sy - state.lastScrollY;
      state.scrollDir = state.scrollVel >= 0 ? 1 : -1;
      state.lastScrollY = sy;
      state.scrollY = sy;

      // Mark as scrolling
      if (!state.isScrolling) {
        state.isScrolling = true;
        // Tell body about scroll state so CSS can pause animations
        document.body.classList.add("is-scrolling");
      }

      // Debounce: clear scrolling flag 200ms after last scroll event
      clearTimeout(scrollDebounceTimer);
      scrollDebounceTimer = window.setTimeout(() => {
        state.isScrolling = false;
        document.body.classList.remove("is-scrolling");
      }, 200);
    }

    function onMouseMove(e: MouseEvent) {
      state.targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      state.targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    }

    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function spawnBurst(x: number, y: number) {
      if (state.isScrolling) return; // Don't spawn during scroll
      const vec = new THREE.Vector3(x, -y, 0.5);
      vec.unproject(camera);
      const dir = vec.sub(camera.position).normalize();
      const dist = -camera.position.z / dir.z;
      const pos = camera.position.clone().addScaledVector(dir, dist);

      const burstMat = new THREE.MeshBasicMaterial({
        color: Math.random() > 0.5 ? COLOR_TOP : COLOR_MID,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      for (let i = 0; i < BURST_COUNT; i++) {
        const mesh = new THREE.Mesh(burstGeo, burstMat.clone());
        mesh.position.copy(pos);
        const vel = new THREE.Vector3(
          (Math.random() - 0.5) * 0.18,
          (Math.random() - 0.5) * 0.18,
          (Math.random() - 0.5) * 0.08,
        );
        scene.add(mesh);
        burstParticles.push({ mesh, velocity: vel, life: 1 });
      }
    }

    function onClick(e: MouseEvent) {
      const target = e.target as Element | null;
      if (
        target?.closest(
          'input, textarea, select, button, a, label, [role="button"], [tabindex]:not([tabindex="-1"]), form',
        )
      ) {
        return;
      }
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      spawnBurst(nx, ny);
    }

    // Use passive scroll — but via the debounced handler
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("click", onClick);

    // ── Animation loop ────────────────────────────────────────────────────────
    function animate(timestamp: number) {
      state.rafId = requestAnimationFrame(animate);

      // While scrolling: throttle to ~10fps (skip most frames)
      if (state.isScrolling) {
        if (timestamp - state.lastRenderTime < 100) return; // ~10fps
      }
      state.lastRenderTime = timestamp;

      if (reducedMotion) {
        renderer.render(scene, camera);
        return;
      }

      state.time += 0.016;

      // Smooth isScrolling → shader uniform transition
      const scrollingUniform = state.isScrolling ? 1.0 : 0.0;
      const prevScrolling = shapeMat.uniforms.uScrolling.value as number;
      const smoothScrolling =
        prevScrolling + (scrollingUniform - prevScrolling) * 0.15;
      shapeMat.uniforms.uScrolling.value = smoothScrolling;
      haloMat.uniforms.uScrolling.value = smoothScrolling;
      ptMat.uniforms.uScrolling.value = smoothScrolling;

      // Scroll progress for color shift
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress =
        docHeight > 0 ? Math.min(state.scrollY / docHeight, 1) : 0;
      const tintColor = getScrollColor(scrollProgress);
      shapeMat.uniforms.uTintColor.value = tintColor;
      shapeMat.uniforms.uScrollProgress.value = scrollProgress;
      haloMat.uniforms.uColor.value = tintColor;

      // Mouse tilt (skip while scrolling)
      if (!state.isScrolling) {
        state.mouseX += (state.targetMouseX - state.mouseX) * 0.04;
        state.mouseY += (state.targetMouseY - state.mouseY) * 0.04;
        camera.position.x = state.mouseX * MOUSE_TILT_STRENGTH;
        camera.position.y = -state.mouseY * MOUSE_TILT_STRENGTH * 0.6;
        camera.lookAt(0, 0, 0);
      }

      // Scroll-driven rotation
      const scrollRot = state.scrollVel * SCROLL_ROT_STRENGTH * state.scrollDir;
      state.rotX += 0.003 + scrollRot * 0.6;
      state.rotY += 0.004 + scrollRot;
      state.rotZ += 0.0015 + scrollRot * 0.3;
      shape.rotation.x = state.rotX;
      shape.rotation.y = state.rotY;
      shape.rotation.z = state.rotZ;
      state.scrollVel *= 0.88;

      // Shader uniforms
      shapeMat.uniforms.uTime.value = state.time;
      ptMat.uniforms.uTime.value = state.time;
      ptMat.uniforms.uScrollVel.value = state.scrollVel;
      haloMat.uniforms.uTime.value = state.time;

      // Particle drift — only when NOT scrolling (skip expensive CPU loop)
      if (!state.isScrolling) {
        const posAttr = ptGeo.getAttribute("position") as THREE.BufferAttribute;
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          posAttr.setY(i, posAttr.getY(i) + speeds[i]);
          if (posAttr.getY(i) > 10) posAttr.setY(i, -10);
        }
        posAttr.needsUpdate = true;
      }

      // Burst particles
      for (let i = burstParticles.length - 1; i >= 0; i--) {
        const bp = burstParticles[i];
        bp.life -= 0.025;
        bp.mesh.position.add(bp.velocity);
        bp.velocity.multiplyScalar(0.96);
        const mat = bp.mesh.material as THREE.MeshBasicMaterial;
        mat.opacity = Math.max(0, bp.life);
        if (bp.life <= 0) {
          scene.remove(bp.mesh);
          bp.mesh.geometry.dispose();
          mat.dispose();
          burstParticles.splice(i, 1);
        }
      }

      renderer.render(scene, camera);
    }

    animate(0);

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(state.rafId);
      clearTimeout(scrollDebounceTimer);
      document.body.classList.remove("is-scrolling");
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
      shapeGeo.dispose();
      shapeMat.dispose();
      haloGeo.dispose();
      haloMat.dispose();
      ptGeo.dispose();
      ptMat.dispose();
      burstGeo.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="webgl-bg"
      className="webgl-bg-canvas"
      aria-hidden="true"
      tabIndex={-1}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -100,
        pointerEvents: "none",
        display: "block",
        userSelect: "none",
        willChange: "transform",
      }}
    />
  );
}
