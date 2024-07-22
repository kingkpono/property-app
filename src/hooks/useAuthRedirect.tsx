import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { auth } from '../lib/firebase';

const useAuthRedirect = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login'); // Redirect to login if not authenticated
    }
  }, [user, loading, router]);

  return { user, loading, error };
};

export default useAuthRedirect;
