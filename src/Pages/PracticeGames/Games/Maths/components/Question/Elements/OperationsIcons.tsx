import { useGameStore } from '@Backend/hooks/useStore';
import { TiDivide, TiMinus, TiPlus, TiTimes } from 'react-icons/ti';

const OperationsIcons = () => {
	const { CurrentQuestion, Questions } = useGameStore();
	const Operation: OperationType = Questions[CurrentQuestion].Operation;
	return (
		<div>
			{Operation == '*' ? (
				<TiTimes />
			) : Operation == '+' ? (
				<TiPlus />
			) : Operation == '/' ? (
				<TiDivide />
			) : Operation == '-' ? (
				<TiMinus />
			) : null}
		</div>
	);
};

export default OperationsIcons;
