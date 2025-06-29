import { getProfile } from '@/lib/profiles';
import ProfileCard from '@/components/ProfileCard';

interface Props {
  params: {
    username: string;
  };
}

export default function ProfilePage({ params }: Props) {
  const profile = getProfile(params.username);

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>User not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <ProfileCard profile={profile} />
    </div>
  );
}
