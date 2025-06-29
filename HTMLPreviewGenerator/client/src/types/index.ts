export interface RimImage {
  id: number;
  title: string;
  description: string;
  category: 'damaged' | 'restored' | 'rusty' | 'polished';
  imageUrl: string;
  thumbnailUrl: string;
  resolution: string;
  source: string;
  sourceId: string;
  tags: string[];
  downloadUrl?: string;
  isSelected: boolean;
}

export interface PairingSuggestion {
  id: number;
  beforeImageId: number;
  afterImageId: number;
  description: string;
  beforeImage?: RimImage;
  afterImage?: RimImage;
}

export type Category = 'all' | 'damaged' | 'restored' | 'rusty' | 'polished';
