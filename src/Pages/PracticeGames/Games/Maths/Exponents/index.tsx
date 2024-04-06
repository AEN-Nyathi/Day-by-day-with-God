/* eslint-disable no-mixed-spaces-and-tabs */
import { lazy, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useGameStore } from '@Backend/hooks/useStore';
import CalculationQuestionsElement from '../components/Question/Calculations';
import Gameover from '../components/GameOver';
import AnswerOptions from '../components/AnswerOpions/AritheticOptions';

const Won = lazy(() => import('../components/Won'));

const Exponents: React.FC = () => {
	const { StudentGrade } = useParams<{
		StudentGrade: StudentGradeType;
	}>();

	const { GameOver, Score, Questions, dispatch } = useGameStore();

	useEffect(() => {
		dispatch({
			type: 'StartGame',
			data: { StudentGrade, GameName: 'Exponents' },
		});
	}, [StudentGrade, dispatch]);
	if (GameOver) {
		return <Gameover />;
	} else if (Score == Questions.length) {
		return <Won />;
	}
	return (
		<main>
			<article className='rounded-none border-none m-0'>
				<CalculationQuestionsElement />
			</article>
			<AnswerOptions />
		</main>
	);
};
export default Exponents;
