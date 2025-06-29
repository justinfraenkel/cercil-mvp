export type Profile = {
  name: string;
  username: string;
  bio: string;
  skills: string[];
  contact: {
    email: string;
    website?: string;
    linkedin?: string;
  };
};

export const profiles: Record<string, Profile> = {
  justin: {
    name: 'Justin Fraenkel',
    username: 'justin',
    bio: 'Builder of ideas, financial automation explorer, and founder of Cercil.',
    skills: ['Bookkeeping', 'Automation', 'SaaS Prototyping', 'Creative Strategy'],
    contact: {
      email: 'justin@example.com',
      website: 'https://justinfraenkel.com',
      linkedin: 'https://linkedin.com/in/justinfraenkel',
    },
  },
  gareth: {
    name: 'Gareth Fraenkel',
    username: 'gareth',
    bio: 'Global thinker with a passion for innovation and connecting people.',
    skills: ['Brand Strategy', 'International Relations', 'Partnership Building'],
    contact: {
      email: 'gareth@example.com',
    },
  },
};
