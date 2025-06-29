import { Profile } from '@/lib/types';

export interface ProfileCardProps {
  profile: Profile;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="bg-white text-black p-6 rounded-xl shadow-lg w-[300px] space-y-4">
      <img
        src={profile.imageUrl}
        alt={profile.name}
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="text-xl font-bold text-center">{profile.name}</h2>
      <p className="text-center text-sm">{profile.bio}</p>
      <ul className="flex flex-wrap justify-center gap-2 text-sm text-white">
        {profile.skills.map((skill, idx) => (
          <li key={idx} className="bg-black px-3 py-1 rounded-full">
            {skill}
          </li>
        ))}
      </ul>
      <p className="text-xs text-center text-gray-600">
        Contact: {profile.email}
      </p>
    </div>
  );
}
