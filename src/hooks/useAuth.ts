'use client';
import { useSession, signIn, signOut } from 'next-auth/react';

const useAuth = () => {
	const { data: session } = useSession();
	const login = () => signIn('keycloack');
	const logout = () => signOut();

	return {
		session,
		logout,
		login,
	};
};
export default useAuth;
