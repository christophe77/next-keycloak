'use client';
import { Button } from '@mui/material';
import useAuth from '@/hooks/useAuth';

export default function Login() {
	const { login } = useAuth();
	return (
		<Button variant="contained" onClick={() => login()}>
			Login
		</Button>
	);
}
