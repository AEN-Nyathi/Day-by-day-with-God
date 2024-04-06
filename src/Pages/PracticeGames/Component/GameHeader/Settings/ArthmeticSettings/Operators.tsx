import { useGameStore } from '@Backend/hooks/useStore';
import { PiMathOperationsBold, PiNumberSquareFiveBold } from 'react-icons/pi';
import { TiDivide, TiTimes } from 'react-icons/ti';
import OperatorTiPlusButton from '../../../../Games/Maths/Buttons/OperatorTiPlusButton';
import OperatorTiMinusButton from '../../../../Games/Maths/Buttons/OperatorTiMinusButton';

const Operators = () => {
	const { StudentGrade, Operation, dispatch } = useGameStore();
	return (
		<>
			{StudentGrade !== 'Grade-1' && Operation !== '+' ? <OperatorTiPlusButton /> : null}
			{StudentGrade !== 'Grade-1' && Operation !== '-' ? <OperatorTiMinusButton /> : null}
			{StudentGrade !== 'Grade-1' && StudentGrade !== 'Grade-2' && Operation !== '*' ? (
				<button
					className='bg-green-500/50 border-green-500'
					onClick={() => {
						dispatch({ type: 'Set-Operation', data: '*' });
					}}>
					<TiTimes />
				</button>
			) : null}
			{StudentGrade !== 'Grade-1' &&
			StudentGrade !== 'Grade-2' &&
			StudentGrade !== 'Grade-3' &&
			Operation !== '/' ? (
				<button
					className='bg-green-500/50 border-green-500'
					onClick={() => {
						dispatch({ type: 'Set-Operation', data: '/' });
					}}>
					<TiDivide />
				</button>
			) : null}
			{StudentGrade !== 'Grade-1' &&
			StudentGrade !== 'Grade-2' &&
			StudentGrade !== 'Grade-3' &&
			StudentGrade !== 'Grade-4' &&
			Operation !== '**' ? (
				<button
					className='bg-green-500/50 border-green-500'
					onClick={() => {
						dispatch({ type: 'Set-Operation', data: '**' });
					}}>
					<PiNumberSquareFiveBold />
				</button>
			) : null}
			{StudentGrade !== 'Grade-1' && Operation !== 'Mixed' ? (
				<button
					className='bg-green-500/50 border-green-500'
					onClick={() => {
						dispatch({ type: 'Set-Operation', data: 'Mixed' });
					}}>
					<PiMathOperationsBold />
				</button>
			) : null}
		</>
	);
};

export default Operators;
