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
<<<<<<< HEAD
  problem?: string;
  outcome?: string;
=======
>>>>>>> e732b1aca2721fa1271ae34bbb321414175e9dd4
}

export interface NavItem {
  label: string;
  path: string;
}
