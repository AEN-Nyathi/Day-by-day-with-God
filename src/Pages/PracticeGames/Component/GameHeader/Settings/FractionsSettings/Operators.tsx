import { useGameStore } from '@Backend/hooks/useStore';
import { PiMathOperationsBold } from 'react-icons/pi';
import { TiDivide, TiTimes } from 'react-icons/ti';
import OperatorTiPlusButton from '../../../../Games/Maths/Buttons/OperatorTiPlusButton';
import OperatorTiMinusButton from '../../../../Games/Maths/Buttons/OperatorTiMinusButton';

const Operators = () => {
	const { StudentGrade, Operation, dispatch } = useGameStore();
	return (
		<nav className='flex gap-1 '>
			{Operation !== '+' ? <OperatorTiPlusButton /> : null}
			{Operation !== '-' ? <OperatorTiMinusButton /> : null}
			{StudentGrade !== 'Grade-4' && StudentGrade !== 'Grade-3' && Operation !== '*' ? (
				<button
					className='bg-green-500/50 border-green-500'
					onClick={() => {
						dispatch({ type: 'Set-Operation', data: '*' });
					}}>
					<TiTimes />
				</button>
			) : null}
			{StudentGrade !== 'Grade-3' &&
			StudentGrade !== 'Grade-4' &&
			StudentGrade !== 'Grade-5' &&
			Operation !== '/' ? (
				<button
					className='bg-green-500/50 border-green-500'
					onClick={() => {
						dispatch({ type: 'Set-Operation', data: '/' });
					}}>
					<TiDivide />
				</button>
			) : null}
			{Operation !== 'Mixed' ? (
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
