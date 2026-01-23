export interface PostSummary {
    slug: string
    title: string
    description: string
    date: string
    tags: string[]
    category: string;
    draft: boolean;
  }
  
  export interface Post extends PostSummary {
    content: string
  }
  