'use client';

import Link from 'next/link';
import HoverProfileCard from './HoverProfileCard';

const OUTER_RADIUS = 300;
const CENTER_X = 300;
const CENTER_Y = 300;

const people = [
  {
    username: 'justin',
    name: 'Justin Fraenkel',
    bio: 'Automation engineer helping finance pros streamline their workflow.',
    skills: ['AI', 'Automation', 'Finance', 'No-code'],
    verticalOffset: -20,
  },
  {
    username: 'gareth',
    name: 'Gareth Fraenkel',
    bio: 'Performance coach and strategist focused on sports and analytics.',
    skills: ['Coaching', 'Strategy', 'Sports Tech', 'Data'],
    verticalOffset: 20,
  },
];

export default function CircleLayout() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="relative w-[600px] h-[600px]">
        {[1, 0.66, 0.33].map((factor, index) => (
          <div
            key={index}
            className="absolute rounded-full border border-white/30"
            style={{
              width: `${OUTER_RADIUS * 2 * factor}px`,
              height: `${OUTER_RADIUS * 2 * factor}px`,
              top: `${CENTER_Y - OUTER_RADIUS * factor}px`,
              left: `${CENTER_X - OUTER_RADIUS * factor}px`,
            }}
          />
        ))}

        {people.map((person, index) => (
          <div
            key={index}
            className="absolute flex flex-col items-center group"
            style={{
              top: CENTER_Y + person.verticalOffset - 10,
              left: CENTER_X - 10,
            }}
          >
            <HoverProfileCard
              name={person.name}
              bio={person.bio}
              skills={person.skills}
            />
            <Link
              href={`/profile/${person.username}`}
              className="text-xs mt-1 whitespace-nowrap hover:underline text-white"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
