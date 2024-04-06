import { Outlet } from 'react-router-dom';
import { GameProvider } from '../Context';
import GameHeader from '../Component/GameHeader';

const Games = () => {
	return (
		<GameProvider>
			<GameHeader />
			<Outlet />
		</GameProvider>
	);
};

export default Games;
