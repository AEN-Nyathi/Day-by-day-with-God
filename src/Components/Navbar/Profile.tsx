import { Link } from 'react-router-dom';
// import profile from '../../assets/Profile.png';
import { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import { useStore } from '@Backend/hooks/useStore';
import { MdOutlineLightMode, MdOutlineModeNight } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';
export default function Profile() {
	const { isMenuOpen } = useStore();
	const links = [{
		Name: 'Your Profile',
		link: 'Profile',
		icon: <CgProfile />
	}, {
		Name: 'Settings',
		link: 'Settings',
		icon: <FiSettings />
	},
	{
		Name: 'Mode',
		link: "Mode",
		icon:
			isMenuOpen ? (
				<MdOutlineLightMode />
			) : (
				<MdOutlineModeNight />
			)
	},
	{
		Name: 'Sign out',
		link: 'Sign_out',
		icon: <BiLogOut />
	}
	];
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className=" flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

			<div className="relative mx-3">
				<button className='border-none'
					type="button"
					onClick={() => setIsOpen(!isOpen)}>
					<CgProfile />
				</button>

				{isOpen && (
					<div className="absolute right-0   z-10 mt-8  w-48 rounded-md bg-light/80 dark:bg-dark/80 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						{links.map((link) => (
							<Link
								key={link.link}
								className="flex gap-2 px-4 py-2 text-sm text-dark dark:text-light"
								onClick={() => setIsOpen(false)}
								to={`/${link.link}`}>
								{link.icon} {link.Name}
							</Link>
						))}

					</div>
				)}
			</div>

		</div>
	);
}
