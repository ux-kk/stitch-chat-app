export type View = 'reflect' | 'summary' | 'listeners' | 'messages' | 'sanctuary';

export interface Listener {
  id: string;
  name: string;
  role: string;
  sessions: string;
  rating: number;
  tags: string[];
  bio: string;
  imageUrl: string;
  available: boolean;
  nextAvailable?: string;
  isNew?: boolean;
  specialty?: string;
  languages?: string[];
}

export interface Message {
  id: string;
  sender: 'guide' | 'user';
  text: string;
  timestamp: string;
  suggestions?: string[];
}

export interface ReflectionSummary {
  quote: string;
  author: string;
  moodBefore: string;
  moodAfter: string;
  heartRateReduction: number;
  insights: {
    id: string;
    title: string;
    description: string;
  }[];
}
