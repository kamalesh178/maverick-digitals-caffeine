import { j as jsxRuntimeExports } from "./index-Cj8-jWY_.js";
function AmbientGlow({
  variant = "section",
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "aria-hidden": "true",
      className,
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 0
      },
      children: [
        variant === "hero" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                position: "absolute",
                top: "-10%",
                right: "-10%",
                width: "600px",
                height: "600px",
                background: "radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)",
                borderRadius: "50%",
                filter: "blur(80px)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                position: "absolute",
                bottom: "-10%",
                left: "-10%",
                width: "400px",
                height: "400px",
                background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
                borderRadius: "50%",
                filter: "blur(70px)"
              }
            }
          )
        ] }),
        variant === "section" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                position: "absolute",
                top: "20%",
                right: "-8%",
                width: "400px",
                height: "400px",
                background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
                borderRadius: "50%",
                filter: "blur(70px)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                position: "absolute",
                top: "30%",
                left: "-8%",
                width: "300px",
                height: "300px",
                background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
                borderRadius: "50%",
                filter: "blur(60px)"
              }
            }
          )
        ] }),
        variant === "footer" && /* Small teal glow — center */
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: "0%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "300px",
              height: "300px",
              background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(60px)"
            }
          }
        )
      ]
    }
  );
}
export {
  AmbientGlow as A
};
