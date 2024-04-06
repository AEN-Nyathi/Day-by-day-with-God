import { useStore } from '@Backend/hooks/useStore';
import { MdFileOpen } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Links: React.FC = () => {
	const { dispatch } = useStore();
	const links = [
		{ name: 'Home', path: '/' },
		{ name: 'Practice ', path: '/PracticeGames/Topics' },
		{ name: 'About', path: '/About' },
		{ name: 'Contact', path: '/Contact' },
	];
	return (
		<ul className='flex flex-col justify-start md:justify-center  col-span-4 md:flex-row gap-4 h-svh md:h-auto'>
			{links.map((link) => (
				<li key={link.name}>
					<Link
						className='inline-flex gap-2 '
						to={link.path}
						onClick={() =>
							dispatch({
								data: false,
								type: 'isMenuOpen',
							})
						}>
						<MdFileOpen className='md:hidden' /> {link.name}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Links;
