import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BlogPost {
    id: PostId;
    title: string;
    content: string;
    publishDate: Timestamp;
    author: string;
    readTime: bigint;
    featuredImageUrl: string;
    excerpt: string;
    category: string;
}
export interface UpdatePostRequest {
    id: PostId;
    title: string;
    content: string;
    publishDate: Timestamp;
    author: string;
    readTime: bigint;
    featuredImageUrl: string;
    excerpt: string;
    category: string;
}
export type Timestamp = bigint;
export type InquiryId = bigint;
export type PostId = bigint;
export interface CreatePostRequest {
    title: string;
    content: string;
    publishDate: Timestamp;
    author: string;
    readTime: bigint;
    featuredImageUrl: string;
    excerpt: string;
    category: string;
}
export interface CreateInquiryRequest {
    serviceInterested: string;
    name: string;
    email: string;
    company: string;
    message: string;
    phone: string;
}
export interface ContactInquiry {
    id: InquiryId;
    serviceInterested: string;
    name: string;
    email: string;
    company: string;
    message: string;
    timestamp: Timestamp;
    phone: string;
}
export interface backendInterface {
    createBlogPost(req: CreatePostRequest): Promise<BlogPost>;
    deleteBlogPost(id: PostId): Promise<boolean>;
    getAllBlogPosts(): Promise<Array<BlogPost>>;
    getAllContactInquiries(): Promise<Array<ContactInquiry>>;
    getBlogPostById(id: PostId): Promise<BlogPost | null>;
    getBlogPostsByCategory(category: string): Promise<Array<BlogPost>>;
    submitContactInquiry(req: CreateInquiryRequest): Promise<ContactInquiry>;
    updateBlogPost(req: UpdatePostRequest): Promise<boolean>;
}
