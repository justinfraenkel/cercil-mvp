import { getProfile } from '@/lib/profiles';
import ProfileCard from '@/components/ProfileCard';

interface PageProps {
  params: {
    username: string;
  };
}

export default async function ProfilePage({ params }: PageProps) {
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
