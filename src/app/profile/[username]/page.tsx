import { getProfileByUsername } from '@/lib/profiles';
import { notFound } from 'next/navigation';

type PageProps = {
  params: {
    username: string;
  };
};

export default function ProfilePage({ params }: PageProps) {
  const profile = getProfileByUsername(params.username);

  if (!profile) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
        <p className="text-sm text-gray-600 mb-4">@{profile.username}</p>
        <p className="mb-4">{profile.bio}</p>
        <h2 className="text-lg font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside">
          {profile.skills.map((skill: string, idx: number) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
