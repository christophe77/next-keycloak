'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { AccountCircle } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import useDrawerMenu from './useDrawerMenu';
import useAuth from '@/hooks/useAuth';

export default function DrawerMenu() {
	const { open, toggleDrawer } = useDrawerMenu();
	const { session } = useAuth();
	return (
		<div>
			<IconButton
				onClick={toggleDrawer(true)}
				size="large"
				edge="start"
				color="inherit"
				aria-label="menu"
				sx={{ mr: 2 }}
			>
				<MenuIcon />
			</IconButton>
			<Drawer open={open} onClose={toggleDrawer(false)}>
				<Box sx={{display:'flex', flexDirection:'column', alignItems:'center', p : 2}}>
					<AccountCircle /><br />
					{session && session.user?.name}
				</Box>
			</Drawer>
		</div>
	);
}
