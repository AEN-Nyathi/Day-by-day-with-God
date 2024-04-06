/* eslint-disable no-mixed-spaces-and-tabs */
import { lazy, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useGameStore } from '@Backend/hooks/useStore';
import AnswerOptions from '@Pages/PracticeGames/Games/Maths/components/AnswerOpions/AritheticOptions';
import CalculationQuestionsElement from '../components/Question/Calculations';
import CountMethod from './Component/Clue/CountMethod';

const Gameover = lazy(() => import('../components/GameOver'));
const Won = lazy(() => import('../components/Won'));

const Arithmetic: React.FC = () => {
	const { StudentGrade } = useParams<{
		StudentGrade: StudentGradeType;
	}>();

	const { GameOver, Score, Clue, CurrentQuestion, Questions, dispatch } = useGameStore();

	useEffect(() => {
		dispatch({
			type: 'StartGame',
			data: { StudentGrade, GameName: 'Arithmetic' },
		});
	}, [StudentGrade, dispatch]);

	if (GameOver) {
		return <Gameover />;
	} else if (Score == Questions.length) {
		return <Won />;
	}
	return (
		<main>
			<article className='rounded-none border-none m-0 pt-0'>
				<CalculationQuestionsElement />
				{Clue &&
				(StudentGrade == 'Grade-1' || StudentGrade == 'Grade-2') &&
				(Questions[CurrentQuestion].Question.Operation == '+' ||
					Questions[CurrentQuestion].Question.Operation == '-') ? (
					<CountMethod Question={Questions[CurrentQuestion] as ArithmeticQuestionType} />
				) : null}
			</article>
			<AnswerOptions />
		</main>
	);
};
export default Arithmetic;
