'use client';

import classNames from 'classnames';

const OUTER_RADIUS = 300;
const CENTER_X = 300;
const CENTER_Y = 300;

const people = [
  {
    name: 'Justin Fraenkel',
    verticalOffset: -20, // Shift upward
  },
  {
    name: 'Gareth Fraenkel',
    verticalOffset: 20, // Shift downward
  },
];

export default function CircleLayout() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="relative w-[600px] h-[600px]">
        {/* Concentric Circles */}
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

        {/* People */}
        {people.map((person, index) => (
          <div
            key={index}
            className="absolute flex flex-col items-center"
            style={{
              top: CENTER_Y + person.verticalOffset - 10,
              left: CENTER_X - 10,
            }}
          >
            <div className="w-5 h-5 bg-yellow-400 rounded-full" />
            <span className="text-xs mt-1 whitespace-nowrap">
              {person.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
