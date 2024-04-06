import { useGameStore } from '@Backend/hooks/useStore';
import { PiMathOperationsBold } from 'react-icons/pi';
import {  TiMinus, TiPlus } from 'react-icons/ti';

const Operators = () => {
	const { StudentGrade, Operation, dispatch } = useGameStore();
	return (
		<nav className='flex gap-1 '>
			{StudentGrade !== 'Grade-1' &&
			StudentGrade !== 'Grade-2' &&
			StudentGrade !== 'Grade-3' &&
			Operation !== '+' ? (
				<button
					className='bg-green-500/50 border-green-500'
					onClick={() => {
						dispatch({ type: 'Set-Operation', data: '+' });
					}}>
					<TiPlus />
				</button>
			) : null}

			{StudentGrade !== 'Grade-1' &&
			StudentGrade !== 'Grade-2' &&
			StudentGrade !== 'Grade-3' &&
			Operation !== '-' ? (
				<button
					className='bg-green-500/50 border-green-500'
					onClick={() => {
						dispatch({ type: 'Set-Operation', data: '-' });
					}}>
					<TiMinus />
				</button>
			) : null}

			{StudentGrade !== 'Grade-1' &&
			StudentGrade !== 'Grade-2' &&
			StudentGrade !== 'Grade-3' &&
			Operation !== 'Mixed' ? (
				<button
					className='bg-green-500/50 border-green-500'
					onClick={() => {
						dispatch({ type: 'Set-Operation', data: 'Mixed' });
					}}>
					<PiMathOperationsBold />
				</button>
			) : null}
		</nav>
	);
};

export default Operators;
