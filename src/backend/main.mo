import Types "types/blog-contact";
import BlogContactLib "lib/blog-contact";
import BlogContactApi "mixins/blog-contact-api";
import List "mo:core/List";

actor {
  let posts = List.empty<Types.BlogPost>();
  let nextPostId = { var value : Nat = 0 };
  let inquiries = List.empty<Types.ContactInquiry>();
  let nextInquiryId = { var value : Nat = 0 };

  // Seed initial blog posts on first run
  let seededNextId = BlogContactLib.seedBlogPosts(posts, nextPostId.value);
  nextPostId.value := seededNextId;

  include BlogContactApi(posts, nextPostId, inquiries, nextInquiryId);
};
