'use client';

import { useState } from 'react';
import classNames from 'classnames';

type HoverProfileCardProps = {
  name: string;
  bio: string;
  skills: string[];
};

export default function HoverProfileCard({ name, bio, skills }: HoverProfileCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-5 h-5 bg-yellow-400 rounded-full" />
      <span className="text-xs mt-1 whitespace-nowrap">{name}</span>

      {isHovered && (
        <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-52 bg-white text-black text-sm rounded-lg shadow-lg p-3 z-10">
          <div className="font-bold">{name}</div>
          <div className="text-xs mt-1">{bio}</div>
          <div className="mt-2">
            <div className="font-semibold text-xs mb-1">Skills:</div>
            <ul className="list-disc list-inside text-xs space-y-0.5">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
