export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  specs?: string[];
  color?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  powerRange: string;
  image: string;
  description: string;
  specs: { [key: string]: string };
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'resort' | 'marine' | 'industrial' | 'emergency';
  location: string;
  image: string;
  capacity: string;
  description: string;
  clientType: string;
  scope: string[];
  completedYear: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  resortOrOrg: string;
  atoll: string;
  rating: number;
  avatar: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  excerpt: string;
  content: string[];
}

export interface ClientItem {
  name: string;
  category: string;
  logo: string;
}
