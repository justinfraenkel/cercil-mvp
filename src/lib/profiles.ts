import { Profile } from './types';

export const profiles: Profile[] = [
  {
    username: 'justin',
    name: 'Justin Fraenkel',
    bio: 'Co-creator of Cercil. Passionate about strategy, building, and relationships.',
    skills: ['Strategy', 'AI', 'Product Design'],
    email: 'justin@example.com',
    imageUrl: 'https://via.placeholder.com/100?text=JF',
  },
  {
    username: 'gareth',
    name: 'Gareth Fraenkel',
    bio: 'Co-creator of Cercil. Interested in design, community, and wellness.',
    skills: ['Design', 'Community Building', 'Wellness'],
    email: 'gareth@example.com',
    imageUrl: 'https://via.placeholder.com/100?text=GF',
  },
];

export function getProfileByUsername(username: string): Profile | undefined {
  return profiles.find((p) => p.username === username);
}
