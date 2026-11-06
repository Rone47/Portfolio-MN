export interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: number;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  summary: string;
  description: string;
  image_url: string | null;
  project_url: string | null;
  repo_url: string | null;
  featured: boolean;
  skills: Skill[];
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  location: string | null;
  start_date: string;
  end_date: string | null;
  description: string;
}

export interface Education {
  id: number;
  school: string;
  degree: string;
  field: string | null;
  start_date: string;
  end_date: string | null;
  description: string;
}

export interface BlogPost {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  cover_image: string | null;
  published_at: string;
}
