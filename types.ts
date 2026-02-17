
export type AppView = 'splash' | 'language' | 'login' | 'register' | 'main';
export type MainTab = 'publish' | 'products' | 'orders' | 'profile' | 'post' | 'schedule' | 'stats' | 'inbox' | 'connect';
export type Mode = 'ecommerce' | 'social';

export interface Product {
  id: string;
  name: string;
  sales: number;
  rating: number;
  inStock: boolean;
  price: number;
  image?: string;
}

export interface Order {
  id: string;
  productName: string;
  platform: string;
  status: 'SHIPPED' | 'PROCESSING' | 'DELIVERED';
  date: string;
}

export interface SocialPost {
  id: string;
  title: string;
  platform: 'Instagram' | 'Facebook' | 'X' | 'TikTok';
  status: 'SCHEDULED' | 'DRAFT' | 'PUBLISHED';
  date: string;
  time: string;
  thumbnail?: string;
}

export interface SocialLead {
  id: string;
  name: string;
  avatar: string;
  message: string;
  platform: string;
  time: string;
  isHot: boolean;
}

export interface SocialNetwork {
  id: string;
  name: string;
  status: 'Connected' | 'Disconnected' | 'Pending';
  icon: string;
  followers: string;
}
