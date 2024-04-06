import { useGameStore } from '@Backend/hooks/useStore';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Gameover from '../components/GameOver';
import Won from '../components/Won';
import Question from './Question';
import AnswerOptions from '@Pages/PracticeGames/Games/Maths/components/AnswerOpions/AritheticOptions';

const PlaceValues = () => {
	const { StudentGrade } = useParams<{
		StudentGrade: StudentGradeType;
	}>();
	const { GameOver, Score, Questions, dispatch } = useGameStore();

	useEffect(() => {
		dispatch({
			type: 'StartGame',
			data: {
				StudentGrade,
				GameName: 'PlaceValues',
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
			<article className='rounded-none border-none m-0'>
				<Question />
			</article>
			<AnswerOptions />
		</main>
	);
};

export default PlaceValues;
