import Types "../types/blog-contact";
import BlogContactLib "../lib/blog-contact";
import List "mo:core/List";
import Time "mo:core/Time";

mixin (
  posts : List.List<Types.BlogPost>,
  nextPostId : { var value : Nat },
  inquiries : List.List<Types.ContactInquiry>,
  nextInquiryId : { var value : Nat },
) {
  // Blog post endpoints

  public func createBlogPost(req : Types.CreatePostRequest) : async Types.BlogPost {
    let (post, newId) = BlogContactLib.createPost(posts, nextPostId.value, req);
    nextPostId.value := newId;
    post;
  };

  public query func getAllBlogPosts() : async [Types.BlogPost] {
    BlogContactLib.getAllPosts(posts);
  };

  public query func getBlogPostById(id : Types.PostId) : async ?Types.BlogPost {
    BlogContactLib.getPostById(posts, id);
  };

  public func updateBlogPost(req : Types.UpdatePostRequest) : async Bool {
    BlogContactLib.updatePost(posts, req);
  };

  public func deleteBlogPost(id : Types.PostId) : async Bool {
    BlogContactLib.deletePost(posts, id);
  };

  public query func getBlogPostsByCategory(category : Text) : async [Types.BlogPost] {
    BlogContactLib.getPostsByCategory(posts, category);
  };

  // Contact inquiry endpoints

  public func submitContactInquiry(req : Types.CreateInquiryRequest) : async Types.ContactInquiry {
    let now = Time.now();
    let (inquiry, newId) = BlogContactLib.createInquiry(inquiries, nextInquiryId.value, req, now);
    nextInquiryId.value := newId;
    inquiry;
  };

  public query func getAllContactInquiries() : async [Types.ContactInquiry] {
    BlogContactLib.getAllInquiries(inquiries);
  };
};
