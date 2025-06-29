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
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
        <p className="mb-4">{profile.bio}</p>
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside space-y-1">
          {profile.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

