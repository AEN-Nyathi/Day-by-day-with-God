/* eslint-disable no-mixed-spaces-and-tabs */
import { lazy, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useGameStore } from '@Backend/hooks/useStore';
import AnswerOptions from './Component/Options';
import CalculationQuestionsElement from '../components/Question/Calculations';
import Gameover from '../components/GameOver';

const Won = lazy(() => import('../components/Won'));

const Fraction: React.FC = () => {
	const { StudentGrade } = useParams<{
		StudentGrade: StudentGradeType;
	}>();

	const { GameOver, Score, Questions, dispatch } = useGameStore();

	useEffect(() => {
		dispatch({
			type: 'StartGame',
			data: { StudentGrade, GameName: 'Fractions' },
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
export default Fraction;
