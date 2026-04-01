export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  status: string;
  focus: string;
  imageUrl?: string;
  itemLink?: string;

  // Detail Page
  longDescription?: string;
  challenge?: string;
  solution?: string;
  outcomes?: string[];    // Buyer-facing result bullets
  gallery?: string[];
  liveLink?: string;
  traction?: string[];
}

export interface NavItem {
  label: string;
  path: string;
}
