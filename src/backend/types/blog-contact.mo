module {
  public type PostId = Nat;
  public type InquiryId = Nat;
  public type Timestamp = Int;

  public type BlogPost = {
    id : PostId;
    title : Text;
    excerpt : Text;
    content : Text;
    featuredImageUrl : Text;
    author : Text;
    publishDate : Timestamp;
    category : Text;
    readTime : Nat;
  };

  public type CreatePostRequest = {
    title : Text;
    excerpt : Text;
    content : Text;
    featuredImageUrl : Text;
    author : Text;
    publishDate : Timestamp;
    category : Text;
    readTime : Nat;
  };

  public type UpdatePostRequest = {
    id : PostId;
    title : Text;
    excerpt : Text;
    content : Text;
    featuredImageUrl : Text;
    author : Text;
    publishDate : Timestamp;
    category : Text;
    readTime : Nat;
  };

  public type ContactInquiry = {
    id : InquiryId;
    name : Text;
    email : Text;
    phone : Text;
    company : Text;
    serviceInterested : Text;
    message : Text;
    timestamp : Timestamp;
  };

  public type CreateInquiryRequest = {
    name : Text;
    email : Text;
    phone : Text;
    company : Text;
    serviceInterested : Text;
    message : Text;
  };
};
