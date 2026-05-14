const MOCK_POSTS = [
  {
    id: BigInt(1),
    title: "Unlocking the Viral Loop: How Mumbai Brands Are Winning Social Media",
    excerpt: "Discover the exact viral mechanics behind Mumbai's fastest-growing brands and how you can replicate their success.",
    content: "Full content here...",
    category: "Social Media",
    author: "Maverick Team",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop&auto=format",
    tags: ["viral", "social media", "Mumbai"],
    createdAt: BigInt(17040672e5),
    updatedAt: BigInt(17040672e5),
    published: true
  },
  {
    id: BigInt(2),
    title: "The Ultimate Guide to Paid Advertising ROI in 2025",
    excerpt: "Stop burning your ad budget. Learn the data-driven frameworks that 10x your ROAS across Meta, Google, and YouTube.",
    content: "Full content here...",
    category: "Performance Marketing",
    author: "Maverick Team",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format",
    tags: ["paid ads", "ROI", "Meta Ads"],
    createdAt: BigInt(17067456e5),
    updatedAt: BigInt(17067456e5),
    published: true
  },
  {
    id: BigInt(3),
    title: "Content Strategy That Converts: From Scroll to Sale",
    excerpt: "Build a content engine that doesn't just rack up impressions — it generates qualified leads and real revenue.",
    content: "Full content here...",
    category: "Digital Marketing",
    author: "Maverick Team",
    imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=500&fit=crop&auto=format",
    tags: ["content", "conversion", "strategy"],
    createdAt: BigInt(1709424e6),
    updatedAt: BigInt(1709424e6),
    published: true
  },
  {
    id: BigInt(4),
    title: "How AI Is Reshaping Performance Marketing in 2025",
    excerpt: "Artificial intelligence is no longer a future concept — it's the engine powering the most efficient ad campaigns today. Discover how brands are using AI to cut costs, sharpen targeting, and multiply their return on ad spend.",
    content: "Full content here...",
    category: "Performance Marketing",
    author: "Muskan Rathod",
    imageUrl: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop",
    tags: ["AI", "Performance Marketing", "Digital Advertising", "ROI"],
    createdAt: BigInt(17460576e5),
    updatedAt: BigInt(17460576e5),
    published: true
  },
  {
    id: BigInt(5),
    title: "The Power of UGC: Why User-Generated Content Drives Real Conversions",
    excerpt: "In a world of polished brand content, authentic user-generated content stands out — and converts. Learn why UGC has become the most trusted form of social proof and how to build a strategy around it.",
    content: "Full content here...",
    category: "Digital Marketing",
    author: "Muskan Rathod",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop",
    tags: ["UGC", "Content Strategy", "Social Proof", "Conversions"],
    createdAt: BigInt(1746144e6),
    updatedAt: BigInt(1746144e6),
    published: true
  },
  {
    id: BigInt(6),
    title: "Building a High-Converting Landing Page: Design Principles That Actually Work",
    excerpt: "Your landing page has seconds to convince a visitor to stay — and only one job: convert. Here are the proven design and copywriting principles behind pages that turn clicks into customers.",
    content: "Full content here...",
    category: "Web Design",
    author: "Dhaval Shah",
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop",
    tags: ["Web Design", "Conversion Rate Optimization", "Landing Pages", "UX"],
    createdAt: BigInt(17462304e5),
    updatedAt: BigInt(17462304e5),
    published: true
  }
];
async function getAllBlogPosts() {
  return MOCK_POSTS;
}
async function getBlogPostById(id) {
  return MOCK_POSTS.find((p) => p.id === id) ?? null;
}
async function getBlogPostsByCategory(category) {
  return MOCK_POSTS.filter((p) => p.category === category);
}
async function submitContactInquiry(inquiry) {
  console.log("Contact inquiry submitted:", inquiry);
  return { success: true, message: "Thank you! We'll get back to you within 24 hours." };
}
export {
  getBlogPostsByCategory as a,
  getBlogPostById as b,
  getAllBlogPosts as g,
  submitContactInquiry as s
};
