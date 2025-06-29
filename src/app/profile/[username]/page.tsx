import { getProfile } from '@/lib/profiles';
import ProfileCard from '@/components/ProfileCard';

export default function Page({
  params,
}: {
  params: { username: string };
}) {
  const profile = getProfile(params.username);

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Profile not found
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <ProfileCard profile={profile} />
    </div>
  );
}
