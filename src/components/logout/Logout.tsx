'use client';
import { Button } from '@mui/material';
import useAuth from '@/hooks/useAuth';

export default function Logout() {
	const { logout } = useAuth();
	return (
		<Button variant="contained" onClick={() => logout()}>
			Logout
		</Button>
	);
}
