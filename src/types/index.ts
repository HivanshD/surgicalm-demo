  export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  thumbnailUrl: string;
  duration: string;
  tags: string[];
  summary: string;
  whatToExpect: string[];
  category: string;
}

export interface VideoData {
  videos: Video[];
}

export type FilterTag = 'All' | 'Animated' | 'Short' | 'Detailed' | 'Joint Replacement' | 'Arthroscopy' | 'Sports Medicine' | 'Spine Surgery' | 'Minimally Invasive';

export interface SearchFilters {
  query: string;
  selectedTags: FilterTag[];
}
