import { getProfileByUsername } from '@/lib/profiles';

interface PageProps {
  params: {
    username: string;
  };
}

export default function ProfilePage({ params }: PageProps) {
  const profile = getProfileByUsername(params.username);

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        <p>Profile not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-8">
      <div className="max-w-md w-full bg-white text-black rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
        <p className="text-sm mb-4">{profile.bio}</p>
        <h2 className="text-lg font-semibold mb-1">Skills / Offerings:</h2>
        <ul className="list-disc list-inside text-sm space-y-1">
          {profile.skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
