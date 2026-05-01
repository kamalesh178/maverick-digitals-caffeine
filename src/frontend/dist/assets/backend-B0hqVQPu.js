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
  }
];
async function getAllBlogPosts() {
  return MOCK_POSTS;
}
async function getBlogPostById(id) {
  return MOCK_POSTS.find((p) => p.id === id) ?? null;
}
async function submitContactInquiry(inquiry) {
  console.log("Contact inquiry submitted:", inquiry);
  return { success: true, message: "Thank you! We'll get back to you within 24 hours." };
}
export {
  getBlogPostById as a,
  getAllBlogPosts as g,
  submitContactInquiry as s
};
