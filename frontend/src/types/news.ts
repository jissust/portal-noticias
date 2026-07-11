  export interface News {
    id?: number;
    category?: string;
    title?: string;
    text?: string;
    date?: string;
    documentId?: string;
    slug: string;
    image?: {
      url?: string;
    };
    categories?: {
      id: number;
      title: string;
      slug?: string;
    }[];
  }