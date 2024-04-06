import { useGameStore } from '@Backend/hooks/useStore';
import { TiMinus } from 'react-icons/ti';

const OperatorTiMinusButton = () => {
	const { dispatch } = useGameStore();
	return (
		<button
			className='bg-green-500/50 border-green-500'
			onClick={() => {
				dispatch({ type: 'Set-Operation', data: '-' });
			}}>
			<TiMinus />
		</button>
	);
};

export default OperatorTiMinusButton;
