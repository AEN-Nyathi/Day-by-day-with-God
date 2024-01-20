import { Link } from 'react-router-dom';
// import profile from '../../assets/Profile.png';
import { useState } from 'react';
export default function Profile() {
	const links = ['Your Profile', 'Settings', 'Sign out'];
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className=" flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
			
			<div className="relative mx-3">
				<button
					type="button"
					className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
					onClick={() => setIsOpen(!isOpen)}>
					<span className="sr-only">Open user menu</span>
					{/* <img className="h-8 w-8 rounded-full" src={profile} alt="" /> */}
				</button>

				{isOpen && (
					<div className="absolute  z-10 mt-5  w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						{links.map((link) => (
							<Link
								key={link}
								className="block px-4 py-2 text-sm text-gray-700"
								to={`/${link}`}>
								{link}
							</Link>
						))}
					</div>
				)}
			</div>
			<button
				type="button"
				className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
				<span className="sr-only">View notifications</span>
				<svg
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					aria-hidden="true">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
					/>
				</svg>
			</button>
		</div>
	);
}
