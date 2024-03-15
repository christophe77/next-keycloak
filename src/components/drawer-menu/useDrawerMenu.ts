import { useState } from 'react';

const useDrawerMenu = () => {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	return {
		open,
		toggleDrawer,
	};
};
export default useDrawerMenu;
