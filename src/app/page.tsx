"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-yellow-400">
          Cercil is your Circle of Trust
        </h1>
        <p className="text-lg sm:text-xl text-zinc-300 mb-10">
          <span className="block mb-3">
            Connect with professionals trusted by the people you trust.
          </span>
          By adding your most trusted contacts, you unlock access to a verified,
          ever-growing network — built on real relationships and mutual trust.
        </p>
        <div className="flex justify-center space-x-6">
          <Link
            href="/pricing"
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition"
          >
            View Pricing
          </Link>
          <Link
            href="/member-portal"
            className="px-6 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded hover:bg-yellow-400 hover:text-black transition"
          >
            Enter Portal
          </Link>
        </div>
      </div>
    </div>
  );
}
