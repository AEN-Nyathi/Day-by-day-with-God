import React from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';

const Navbar: React.FunctionComponent = () => {
	return (
		<header className="w-full bg-blue-50 dark:bg-blue-950">
			<Desktop />
			<Mobile />
		</header>
	);
};
export default Navbar;
