export interface BlogPost {
  id: bigint;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  imageUrl: string;
  tags: string[];
  createdAt: bigint;
  updatedAt: bigint;
  published: boolean;
}

export interface ContactInquiry {
  id: bigint;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  service: string;
  createdAt: bigint;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface NavLink {
  label: string;
  href: string;
}
