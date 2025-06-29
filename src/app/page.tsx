export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-6 text-center">Welcome to Cercil</h1>
      <p className="text-lg mb-8 text-center max-w-xl">
        Cercil helps you build trust and showcase your network. Join our private beta to see how your connections can work for you.
      </p>
      <a
        href="/member-portal"
        className="px-8 py-4 bg-yellow-400 text-black rounded-full font-semibold text-lg shadow hover:bg-yellow-300 transition"
      >
        Join the Beta
      </a>
    </main>
  );
}
