import Links from './Links';
import Profile from './Profile';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
export default function Mobile() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="grid grid-cols-4 justify-items-center content-center place-items-center md:hidden gap-2 py-2">
			{/* <button className="" onClick={() => setIsOpen(!isOpen)}>c</button> */}
			<FiMenu onClick={() => setIsOpen(!isOpen)} />
			<h1 className="col-span-2 my-0 py-1">template</h1>
			{/* <FiMenu onClick={() => OpenMenu(dispatch, !isMenuOpen)} /> */}
			<Profile />
			{isOpen ? <Links /> : null}
		</div>
	);
}
