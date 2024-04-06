import Won from '../components/Won';
import { useGameStore } from '@Backend/hooks/useStore';
import { useEffect } from 'react';
import AnswerOptions from '@Pages/PracticeGames/Games/Maths/components/AnswerOpions/AritheticOptions';
import { useParams } from 'react-router-dom';
import CalculationQuestionsElement from '../components/Question/Calculations';
import Gameover from '../components/GameOver';

const MissingNumber: React.FC = () => {
	const { StudentGrade } = useParams<{
		StudentGrade: StudentGradeType;
	}>();
	const { GameOver, Score, Questions, dispatch } = useGameStore();

	useEffect(() => {
		dispatch({
			type: 'StartGame',
			data: {
				StudentGrade,
				GameName: 'MissingNumber',
			},
		});
	}, [StudentGrade, dispatch]);

	if (GameOver) {
		return <Gameover />;
	} else if (Score == Questions.length) {
		return <Won />;
	}
	return (
		<main>
			<article className='rounded-none border-none pt-0 m-0'>
				<CalculationQuestionsElement />
			</article>
			<AnswerOptions />
		</main>
	);
};

export default MissingNumber;
