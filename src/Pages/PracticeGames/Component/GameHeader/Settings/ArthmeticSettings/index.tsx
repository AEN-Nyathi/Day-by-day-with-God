import { TfiHelp } from 'react-icons/tfi';
import { useGameStore } from '@Backend/hooks/useStore';
import SpacailNumberSelect from './SpacailNumberSelect';
import SortByAnswersButton from '../../../../Games/Maths/Buttons/SortByAnswersButton';
import ShuffleAnswersButton from '../../../../Games/Maths/Buttons/ShuffleAnswersButton';
import Operators from './Operators';

const ArthmeticSettings: React.FC = () => {
	const { StudentGrade, Operation, dispatch } = useGameStore();
	return (
		<>
			{Operation == '*' ? <SortByAnswersButton /> : null}

			{StudentGrade == 'Grade-1' ? <ShuffleAnswersButton /> : null}
			<button
				className=' flex'
				onClick={() => {
					dispatch({ type: 'Clue' });
				}}>
				<TfiHelp />
			</button>
			<Operators />

			{StudentGrade !== 'Grade-1' &&
			StudentGrade !== 'Grade-2' &&
			Operation !== '+' &&
			Operation !== '-' ? (
				<SpacailNumberSelect />
			) : null}
		</>
	);
};

export default ArthmeticSettings;
