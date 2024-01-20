import React from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';

const Navbar:React.FunctionComponent = ()=> {
	
	return (
		<header className="bg-gray-800">
			<Desktop />
			<Mobile />
		</header>
	);
}
export default Navbar