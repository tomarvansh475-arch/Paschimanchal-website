export interface Pillar {
  id: string;
  number: string;
  title: string;
  titleEn: string;
  description: string;
  iconName: string; // Used to pick icons from Lucide
}

export interface Campaign {
  id: string;
  titleHindi: string;
  titleEnglish: string;
  subtitleHindi?: string;
  subtitleEnglish?: string;
  imageUrl: string;
  description: string;
  pledgedCount: number;
}

export interface Achievement {
  id: string;
  count: string;
  titleHindi: string;
  titleEnglish: string;
  icon: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string;
  imageUrl: string;
  views: number;
}

export interface TeamMember {
  id: string;
  name: string;
  nameHindi: string;
  role: string;
  roleHindi: string;
  imageUrl: string;
  bio?: string;
  socials: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
}

export interface DonationOption {
  amount: number;
  label: string;
  impact: string;
}
