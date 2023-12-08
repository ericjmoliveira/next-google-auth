import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib/auth';
import { SignInButton, SignOutButton } from '@/components/auth-buttons';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return (
      <div>
        <h1 className="text-lg font-medium">Not signed in</h1>
        <SignInButton />
      </div>
    );
  }

  return (
    <div>
      <pre>{JSON.stringify(session.user, null, 2)}</pre>
      <SignOutButton />
    </div>
  );
}
