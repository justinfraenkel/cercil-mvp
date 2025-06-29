import React from 'react';

type ProfileCardProps = {
  name: string;
  bio: string;
  skills: string[];
  compact?: boolean; // used for hover preview
};

export default function ProfileCard({ name, bio, skills, compact = false }: ProfileCardProps) {
  return (
    <div className={`border border-white/20 bg-white/10 backdrop-blur p-4 rounded-xl ${compact ? 'w-48 text-sm' : 'w-full max-w-md'}`}>
      <h2 className="text-white font-semibold text-lg mb-2">{name}</h2>
      <p className="text-white/80 mb-2">{bio}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span key={i} className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
