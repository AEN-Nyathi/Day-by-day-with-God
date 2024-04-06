import { useGameStore } from '@Backend/hooks/useStore';
import { useEffect, useState } from 'react';

const AnswerOptions: React.FC = () => {
	const {
		Questions,
		CurrentQuestion,
		ShuffleAnswers,
		StudentGrade,
		Clue,
		dispatch,
		SortByAnswers,
	} = useGameStore();
	const [AvailableAnswers, setAvailableAnswers] = useState(
		Questions[CurrentQuestion].AvailableAnswers as number[]
	);
	useEffect(() => {
		if (ShuffleAnswers && StudentGrade == 'Grade-1') {
			setAvailableAnswers(
				Questions[CurrentQuestion].AvailableAnswers.sort(() => Math.random() - 0.5) as number[]
			);
		} else {
			setAvailableAnswers(Questions[CurrentQuestion].AvailableAnswers as number[]);
		}
	}, [CurrentQuestion, Questions, ShuffleAnswers, StudentGrade, SortByAnswers]);

	return (
		<article
			className={`${
				Clue ? 'bg-red-500/50' : ''
			} w-full  fixed bottom-0 rounded-none border-none  m-0`}>
			<ul className='grid grid-cols-5 md:grid-cols-10 gap-2'>
				{AvailableAnswers.map((Answer) => {
					return (
						<li key={Math.random() * 1000}>
							<button
								onClick={() => {
									if (Answer == Questions[CurrentQuestion].Answer) {
										dispatch({ type: 'CorrectAnswer' });
									} else {
										dispatch({ type: 'InCorrectAnswer' });
									}
								}}
								className={`${
									Clue >= 2
										? 'bg-red-500 border-red-500/50 hover:border-red-500 border-4'
										: Clue == 1
										? 'bg-green-500  border-yellow-500/50 '
										: 'bg-yellow-500 dark:bg-yellow-500/20 border-yellow-500/50'
								} w-full text-2xl md:text-4xl p-1  active:bg-blue-500 hover:bg-yellow-500   hover:border-blue-500`}>
								{Answer}
							</button>
						</li>
					);
				})}
			</ul>
		</article>
	);
};

export default AnswerOptions;
