import { TfiHelp } from 'react-icons/tfi';
import { useGameStore } from '@Backend/hooks/useStore';
import Operators from './Operators';

const FractionsSettings: React.FC = () => {
	const { dispatch } = useGameStore();
	return (
		<>
			<button
				className=' flex'
				onClick={() => {
					dispatch({ type: 'Clue' });
				}}>
				<TfiHelp />
			</button>
			<Operators />
		</>
	);
};

export default FractionsSettings;
