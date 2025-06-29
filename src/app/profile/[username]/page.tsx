import { getProfile } from '@/lib/profiles';
import ProfileCard from '@/components/ProfileCard';
import { type Metadata } from 'next';

type PageProps = {
  params: { username: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const profile = getProfile(params.username);
  return {
    title: profile ? `${profile.name} – Cercil` : 'Profile not found',
  };
}

export default function ProfilePage({ params }: PageProps) {
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
