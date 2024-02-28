
import { useStore } from '@Backend/hooks/useStore';
import { Link } from 'react-router-dom';

const Links: React.FC = () => {
	const { dispatch } = useStore();
	const links = [
		{ name: 'Home', path: '/' },
		{ name: 'Practice Games', path: '/PracticeGames' },
		{ name: 'About', path: '/About' },
		{ name: 'Contact', path: '/Contact' },
	];
	return (
		<ul className="flex flex-col col-span-2 md:flex-row gap-4 h-svh md:h-auto">
			{links.map((link) => (
				<li key={link.name}>
					<Link to={link.path} onClick={() => dispatch({
						data: false,
						type: "isMenuOpen"
					})}>
						{link.name}
					</Link>
				</li>
			))}
		</ul>
	);
}

export default Links;
