'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import Login from '../login/Login';
import Logout from '../logout/Logout';
import DrawerMenu from '../drawer-menu/DrawerMenu';

interface IHeaderProps {
	isLoggedIn: boolean;
}
const Header = ({ isLoggedIn }: IHeaderProps) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<DrawerMenu />
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Next Keycloak
					</Typography>
					{isLoggedIn && (
						<Box
							sx={{
								flexGrow: 1,
								display: 'flex',
								alignItems: 'center',
								gap: 2,
							}}
						>
							<MailIcon />
							<AccountCircleIcon />
							<SettingsIcon />
						</Box>
					)}
					{isLoggedIn ? <Logout /> : <Login />}
				</Toolbar>
			</AppBar>
		</Box>
	);
};
export default Header;
