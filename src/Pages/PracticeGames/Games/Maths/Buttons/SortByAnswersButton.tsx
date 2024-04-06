
import { useGameStore } from '@Backend/hooks/useStore';
import { BsSortNumericUp } from 'react-icons/bs';

const SortByAnswersButton = () => {
		const {  SortByAnswers, dispatch } = useGameStore();
	return (
		<button
			className={` flex relative ${SortByAnswers ? 'bg-blue-500 border-4' : 'bg-red-500'}`}
			onClick={() => {
				dispatch({ type: 'SortByAnswers' });
			}}>
			<BsSortNumericUp /> Sort By Answers
			<span
				className={`absolute -top-3 -right-3  rounded-lg  text-xs p-1 ${
					SortByAnswers ? 'bg-red-500' : 'bg-blue-500'
				}`}>
				{SortByAnswers ? 'Turn Off' : 'Turn On'}
			</span>
		</button>
	);
}

export default SortByAnswersButton