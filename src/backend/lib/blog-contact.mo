import Types "../types/blog-contact";
import List "mo:core/List";

module {
  public func createPost(
    posts : List.List<Types.BlogPost>,
    nextId : Nat,
    req : Types.CreatePostRequest,
  ) : (Types.BlogPost, Nat) {
    let post : Types.BlogPost = {
      id = nextId;
      title = req.title;
      excerpt = req.excerpt;
      content = req.content;
      featuredImageUrl = req.featuredImageUrl;
      author = req.author;
      publishDate = req.publishDate;
      category = req.category;
      readTime = req.readTime;
    };
    posts.add(post);
    (post, nextId + 1);
  };

  public func getAllPosts(posts : List.List<Types.BlogPost>) : [Types.BlogPost] {
    posts.toArray();
  };

  public func getPostById(posts : List.List<Types.BlogPost>, id : Types.PostId) : ?Types.BlogPost {
    posts.find(func(p) { p.id == id });
  };

  public func updatePost(
    posts : List.List<Types.BlogPost>,
    req : Types.UpdatePostRequest,
  ) : Bool {
    var found = false;
    posts.mapInPlace(func(p) {
      if (p.id == req.id) {
        found := true;
        {
          p with
          title = req.title;
          excerpt = req.excerpt;
          content = req.content;
          featuredImageUrl = req.featuredImageUrl;
          author = req.author;
          publishDate = req.publishDate;
          category = req.category;
          readTime = req.readTime;
        };
      } else { p };
    });
    found;
  };

  public func deletePost(posts : List.List<Types.BlogPost>, id : Types.PostId) : Bool {
    let before = posts.size();
    let filtered = posts.filter(func(p) { p.id != id });
    posts.clear();
    posts.append(filtered);
    posts.size() < before;
  };

  public func getPostsByCategory(
    posts : List.List<Types.BlogPost>,
    category : Text,
  ) : [Types.BlogPost] {
    posts.filter(func(p) { p.category == category }).toArray();
  };

  public func createInquiry(
    inquiries : List.List<Types.ContactInquiry>,
    nextId : Nat,
    req : Types.CreateInquiryRequest,
    timestamp : Int,
  ) : (Types.ContactInquiry, Nat) {
    let inquiry : Types.ContactInquiry = {
      id = nextId;
      name = req.name;
      email = req.email;
      phone = req.phone;
      company = req.company;
      serviceInterested = req.serviceInterested;
      message = req.message;
      timestamp;
    };
    inquiries.add(inquiry);
    (inquiry, nextId + 1);
  };

  public func getAllInquiries(inquiries : List.List<Types.ContactInquiry>) : [Types.ContactInquiry] {
    inquiries.toArray();
  };

  public func seedBlogPosts(posts : List.List<Types.BlogPost>, nextId : Nat) : Nat {
    if (posts.size() > 0) { return nextId };
    let seeds : [Types.CreatePostRequest] = [
      {
        title = "Top 5 Digital Marketing Trends in 2024";
        excerpt = "Discover the cutting-edge digital marketing trends that are reshaping how businesses connect with their audiences this year.";
        content = "The digital marketing landscape is evolving at an unprecedented pace. From AI-driven personalization to short-form video dominance, brands that adapt quickly will thrive. In this post, we explore the five most impactful trends: 1) AI and automation in ad targeting, 2) Short-form video content on Reels and Shorts, 3) Voice search optimization, 4) Hyper-personalized email campaigns, and 5) Interactive and immersive content experiences.";
        featuredImageUrl = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800";
        author = "Maverick Digitals Team";
        publishDate = 1704067200000000000;
        category = "Digital Marketing";
        readTime = 5;
      },
      {
        title = "How SEO Has Changed: A 2024 Guide for Indian Businesses";
        excerpt = "SEO in 2024 is all about user intent and authority signals. Here is what every Indian business owner needs to know.";
        content = "Search engine optimization has come a long way from keyword stuffing and backlink farms. Today, Google's algorithms reward experience, expertise, authoritativeness, and trustworthiness — the E-E-A-T framework. For Indian businesses, this means creating locally relevant, high-quality content; earning genuine backlinks; ensuring mobile-first design; and optimizing Core Web Vitals. We break down each of these factors with actionable steps you can start implementing today.";
        featuredImageUrl = "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800";
        author = "Maverick Digitals Team";
        publishDate = 1706745600000000000;
        category = "SEO";
        readTime = 7;
      },
      {
        title = "Why Your Brand Needs a Strong Social Media Presence";
        excerpt = "Social media is no longer optional — it is the front door of your brand. Learn how to build an audience that converts.";
        content = "With over 500 million active internet users in India, social media platforms like Instagram, LinkedIn, and YouTube have become critical brand-building tools. A consistent posting strategy, engagement with your community, and data-driven content planning can transform followers into loyal customers. In this guide, we cover platform selection, content calendars, paid social strategies, and how to measure ROI on social media investments.";
        featuredImageUrl = "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800";
        author = "Maverick Digitals Team";
        publishDate = 1709424000000000000;
        category = "Social Media";
        readTime = 6;
      },
    ];
    var id = nextId;
    for (req in seeds.values()) {
      let (_, newId) = createPost(posts, id, req);
      id := newId;
    };
    id;
  };
};
