
import { Link } from 'react-router-dom';

function Links() {
	const links = [
		{ name: 'Home', path: '/' },
		{ name: 'Menu', path: '/Menu' },
		{ name: 'About', path: '/About' },
		{ name: 'Contact', path: '/Contact' },
	];
	return (
		<ul className="flex flex-col col-span-2 md:flex-row gap-4">
			{links.map((link) => (
				<li key={link.name}>
					<Link to={link.path} className="text-white">
						{link.name}
					</Link>
				</li>
			))}
		</ul>
	);
}

export default Links;
