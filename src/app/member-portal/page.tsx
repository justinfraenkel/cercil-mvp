"use client";

import { useRef } from "react";

const centerUsers = [
  { name: "Gareth Fraenkel", color: "bg-blue-400", yOffset: -12 },
  { name: "Justin Fraenkel", color: "bg-yellow-400", yOffset: 12 },
];

const gfsConnections = Array.from({ length: 5 }, () => ({
  name: "Trusted\nConnection",
  color: "bg-zinc-500",
}));

const justinsConnections = Array.from({ length: 5 }, () => ({
  name: "Justin’s\nTrusted\nConnection",
  color: "bg-zinc-700",
}));

export default function MemberPortal() {
  const containerRef = useRef<HTMLDivElement>(null);

  const renderRing = (
    radius: number,
    people: { name: string; color: string; yOffset?: number }[],
    offset: number = 0
  ) => {
    return people.map((person, index) => {
      const angle = ((index + offset) / people.length) * 2 * Math.PI;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius + (person.yOffset || 0);

      return (
        <div
          key={`${radius}-${index}`}
          className="absolute flex flex-col items-center space-y-1"
          style={{
            top: `calc(50% + ${y}px)`,
            left: `calc(50% + ${x}px)`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className={`w-4 h-4 rounded-full ${person.color}`} />
          <span className="text-[10px] whitespace-pre text-center leading-tight">
            {person.name}
          </span>
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white font-mono">
      <h1 className="text-3xl font-bold text-yellow-400 mb-8">Your Circle</h1>

      <div
        ref={containerRef}
        className="relative flex items-center justify-center"
        style={{ width: "700px", height: "700px" }}
      >
        {/* Concentric ring outlines */}
        {[100, 160, 230, 300].map((r, i) => (
          <div
            key={i}
            className="absolute border border-zinc-700 rounded-full"
            style={{
              width: r * 2,
              height: r * 2,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}

        {/* Center users */}
        {renderRing(20, centerUsers)}

        {/* Inner ring – Trusted Connections */}
        {renderRing(80, gfsConnections)}

        {/* First outer ring – Justin’s Trusted Connections */}
        {renderRing(160, justinsConnections)}
      </div>
    </div>
  );
}
