import Gameover from '../components/GameOver';
import Won from '../components/Won';
import { GiBanana } from 'react-icons/gi';
import { useGameStore } from '@Backend/hooks/useStore';
import { useEffect } from 'react';
import AnswerOptions from '@Pages/PracticeGames/Games/Maths/components/AnswerOpions/AritheticOptions';

const FindNumberGrade1: React.FC = () => {
	const { GameOver, Score, Questions, CurrentQuestion, Clue, StudentGrade, dispatch } =
		useGameStore();

	useEffect(() => {
		dispatch({
			type: 'StartGame',
			data: { StudentGrade, GameName: 'FindTheNumber' },
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
				<h3>How many Bananas can you see?</h3>
				<ul className='flex flex-wrap gap-1 justify-around'>
					{Array.from(Array(Questions[CurrentQuestion].Answer)).map((_, index) => (
						<li
							key={index}
							className={` ${
								Clue == 2 && index + 1 == Questions[CurrentQuestion].Answer
									? 'bg-rose-500'
									: 'bg-green-500/50'
							} hover:bg-yellow-500 p-2 active:bg-blue-500 border-yello-500 font-bold  border-2 rounded-md inline-flex justify-center duration-200`}>
							{Clue ? (
								<div className='grid place-items-center'>
									<span>{index + 1}</span>
									<GiBanana
										className='md:w-10 md:h-10'
										key={index}
									/>
								</div>
							) : (
								<GiBanana
									className='md:w-10 md:h-10'
									key={index}
								/>
							)}
						</li>
					))}
				</ul>
			</article>
			<AnswerOptions />
		</main>
	);
};

export default FindNumberGrade1;
