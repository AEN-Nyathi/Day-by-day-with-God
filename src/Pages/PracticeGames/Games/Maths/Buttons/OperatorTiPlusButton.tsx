import { useGameStore } from '@Backend/hooks/useStore';
import { TiPlus } from 'react-icons/ti';

const OperatorTiPlusButton = () => {
	const { dispatch } = useGameStore();
	return (
		<button
			className='bg-green-500/50 border-green-500'
			onClick={() => {
				dispatch({ type: 'Set-Operation', data: '+' });
			}}>
			<TiPlus />
		</button>
	);
};

export default OperatorTiPlusButton;
