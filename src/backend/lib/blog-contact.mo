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
      {
        title = "How AI Is Reshaping Performance Marketing in 2025";
        excerpt = "Artificial intelligence is no longer a futuristic buzzword — it is the engine quietly powering the most effective ad campaigns of 2025. Discover how forward-thinking brands are leveraging AI to cut acquisition costs and dramatically improve conversion rates.";
        content = "Performance marketing has always been about precision — reaching the right person with the right message at the right moment. In 2025, artificial intelligence has become the indispensable force multiplier that makes this precision scalable and accessible to brands of all sizes.\n\nThe most significant shift is in audience intelligence. Traditional demographic targeting is giving way to behavioral prediction models that analyze thousands of micro-signals — browsing patterns, purchase history, content consumption, and even the time of day a user is most receptive. AI systems can now identify high-intent audiences weeks before they are ready to buy, giving advertisers a critical first-mover advantage.\n\nCreative optimization is another arena where AI is proving transformative. Dynamic creative optimization (DCO) engines test hundreds of headline, image, and copy combinations simultaneously, identifying winning variants in hours rather than the weeks a traditional A/B test would require. For performance marketers, this means campaigns continuously self-improve without manual intervention.\n\nBidding strategies have also been fundamentally reimagined. Smart bidding algorithms on platforms like Meta and Google no longer simply optimize for clicks — they optimize for downstream business outcomes such as purchases, qualified leads, and even customer lifetime value. When fed clean conversion data, these systems allocate budget with a level of efficiency that human optimization cannot match.\n\nAt Maverick Digitals, we integrate AI-powered targeting, predictive audience segmentation, and automated creative testing across every performance campaign we manage. The result is leaner ad spend, higher-quality leads, and measurable growth for the brands we partner with. If your current campaigns are not leveraging AI at each stage of the funnel, you are leaving significant revenue on the table.";
        featuredImageUrl = "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop";
        author = "Muskan Rathod";
        publishDate = 1746057600000000000;
        category = "Performance Marketing";
        readTime = 6;
      },
      {
        title = "The Power of UGC: Why User-Generated Content Drives Real Conversions";
        excerpt = "In an era saturated with polished brand content, authentic voices cut through the noise. User-generated content has quietly become one of the highest-converting assets in a digital marketer's toolkit — and the brands winning in 2025 know exactly how to deploy it.";
        content = "Trust is the currency of modern marketing. Consumers are more informed, more skeptical, and more selective than ever before — and they can spot inauthenticity in seconds. This is precisely why user-generated content (UGC) has emerged as one of the most powerful conversion tools available to brands today.\n\nUGC encompasses any content — reviews, testimonials, unboxing videos, social posts, or photos — created by real customers rather than the brand itself. Unlike polished brand advertisements, UGC carries the weight of lived experience. A genuine review from a satisfied customer influences purchase decisions far more effectively than the most creatively executed brand campaign.\n\nThe numbers support this decisively. Studies consistently show that consumers are 2.4 times more likely to view UGC as authentic compared to brand-produced content. Campaigns that incorporate UGC elements report higher click-through rates, lower cost-per-acquisition, and stronger repeat purchase behavior.\n\nFor brands running paid social campaigns, UGC-style creatives — raw, candid, shot on a phone — regularly outperform high-production studio content. Meta's own research has demonstrated that UGC ads generate up to 50% more engagement than traditional brand ads. This is why leading D2C brands are actively building UGC pipelines: systematic programs that identify, incentivize, and amplify their most vocal customers.\n\nAt Maverick Digitals, UGC strategy is central to how we scale brands on Instagram and across performance channels. We help clients build creator networks, develop UGC briefs that elicit compelling authentic content, and integrate that content into paid campaigns for maximum impact. If your brand is still relying solely on studio-produced creative, it is time to put your customers' voices to work.";
        featuredImageUrl = "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop";
        author = "Muskan Rathod";
        publishDate = 1746144000000000000;
        category = "Digital Marketing";
        readTime = 5;
      },
      {
        title = "Building a High-Converting Landing Page: Design Principles That Actually Work";
        excerpt = "A landing page is not simply a digital brochure — it is a precision-engineered conversion machine. Understanding the design and psychology principles that separate high-performing pages from forgotten ones can be the difference between a campaign that breaks even and one that scales profitably.";
        content = "Every click that arrives on your landing page represents a moment of intent. A visitor arrived because something caught their attention — an ad, a search result, a social post. What happens in the next few seconds determines whether that intent converts into a lead, a sale, or a lost opportunity. Landing page design is the discipline of making those seconds count.\n\nThe most fundamental principle is message match. The headline on your landing page must directly echo the promise made in the ad or link that brought the visitor there. Any disconnect — in tone, offer, or visual language — triggers an immediate trust rupture. Visitors who feel they have landed in the wrong place leave within seconds, and no amount of design sophistication will recover them.\n\nVisual hierarchy is equally critical. Every element on the page should serve a single purpose: guiding the visitor's eye toward the call to action. This means ruthless editing — removing navigation menus that offer exit routes, eliminating content blocks that do not contribute to the conversion goal, and ensuring the CTA button is unmistakably prominent. White space is not wasted space; it is the breathing room that lets your most important elements command attention.\n\nSocial proof — testimonials, client logos, case study snippets, star ratings — should be strategically placed in the proximity of decision points. Humans are inherently social creatures; evidence that others have made this choice and benefited from it dramatically reduces the perceived risk of conversion.\n\nPage speed is a design decision as much as a technical one. Every unnecessary image, unoptimized script, or heavy font load adds milliseconds that compound into lost conversions. Google's research indicates that pages loading in under two seconds convert at significantly higher rates than slower counterparts.\n\nAt Maverick Digitals, our web and app development team designs landing pages through the lens of conversion science — every layout decision, copy choice, and interactive element is grounded in behavioral data. Whether you are running performance campaigns or organic traffic, a thoughtfully engineered landing page is the highest-leverage investment you can make in your marketing stack.";
        featuredImageUrl = "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop";
        author = "Dhaval Shah";
        publishDate = 1746230400000000000;
        category = "Web Design";
        readTime = 7;
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
