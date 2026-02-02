
export interface Memory {
  id: string;
  url: string;
  caption: string;
  date: string;
}

export interface LoveNote {
  sender: string;
  content: string;
  tone: 'romantic' | 'funny' | 'poetic';
}

export enum Page {
  Home = 'home',
  Letter = 'letter',
  Gallery = 'gallery',
  Proposal = 'proposal'
}
