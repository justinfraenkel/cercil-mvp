import { notFound } from 'next/navigation';
import { profiles, Profile } from '@/lib/profiles';

type Params = {
  params: {
    username: string;
  };
};

export default function ProfilePage({ params }: Params) {
  const profile: Profile | undefined = profiles[params.username];

  if (!profile) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-black">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
        <p className="text-sm text-gray-600 mb-4">@{params.username}</p>
        <p className="mb-4">{profile.bio}</p>
        <h2 className="text-xl font-semibold mb-2">Skills & Offerings</h2>
        <ul className="list-disc list-inside space-y-1">
          {profile.skills.map((skill: string, i: number) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
