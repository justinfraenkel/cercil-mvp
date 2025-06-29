import { Profile } from './types';

const profiles: Profile[] = [
  {
    username: 'justin',
    name: 'Justin Fraenkel',
    email: 'justin@example.com',
    imageUrl: 'https://via.placeholder.com/150',
    bio: 'Builder, thinker, founder of Cercil. Exploring the intersections of trust and tech.',
    skills: ['Automation', 'AI', 'Finance', 'Startups'],
  },
  {
    username: 'gareth',
    name: 'Gareth Fraenkel',
    email: 'gareth@example.com',
    imageUrl: 'https://via.placeholder.com/150',
    bio: 'Creative strategist and collaborator. Believer in small wins and long games.',
    skills: ['Design', 'Storytelling', 'Community', 'Ethics'],
  },
];

export function getProfile(username: string): Profile | undefined {
  return profiles.find((p) => p.username === username);
}
