export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  status: string;
  focus: string;
  imageUrl?: string;
  itemLink?: string; // Optional link to specific item if needed

  // New fields for Detail Page
  longDescription?: string;
  challenge?: string;
  solution?: string;
  gallery?: string[];
  liveLink?: string;
  repoLink?: string;
  traction?: string[]; // Bullet points for progress/traction
  problem?: string;
  outcome?: string;
}

export interface NavItem {
  label: string;
  path: string;
}
