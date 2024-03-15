'use client';
import * as React from 'react';
import Image from 'next/image';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from '@/components/header/Header';
import useAuth from '@/hooks/useAuth';
import keycloakLogo from '../../public/images/keycloak.png';

export default function Home() {
	const { session } = useAuth();
	return (
		<>
			<Header isLoggedIn={session ? true : false} />
			<CssBaseline />
			<Container sx={{ mt: '20px', width:'100%', textAlign:'center' }}>
				<Image src={keycloakLogo} width={250} alt="keycloak" />
			</Container>
		</>
	);
}
