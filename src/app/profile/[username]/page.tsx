import { getProfile } from '@/lib/profiles';
import ProfileCard from '@/components/ProfileCard';
import { type Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { username: string };
}): Promise<Metadata> {
  const profile = getProfile(params.username);
  return {
    title: profile ? `${profile.name} – Cercil` : 'Profile not found',
  };
}

export default function ProfilePage({
  params,
}: {
  params: { username: string };
}) {
  const profile = getProfile(params.username);

  if (!profile) {
    return <div className="text-white p-10">Profile not found.</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <ProfileCard profile={profile} />
    </div>
  );
}
