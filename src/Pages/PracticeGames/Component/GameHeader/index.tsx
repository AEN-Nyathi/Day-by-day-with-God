import { useGameStore } from '@Backend/hooks/useStore';
import { useEffect, useState } from 'react';
import Timer from './Nodes/Timer';
import NumberOfQuestionNode from './Nodes/NumberOfQuestionNode';
import QuestionTimeNode from './Nodes/QuestionTimeNode';
import StateNode from './Nodes/StateNode';
import SettingsNode from './Settings';
import RestartGameButton from '@Pages/PracticeGames/Games/Maths/Buttons/RestartGameButton';

const GameHeader: React.FC = () => {
	const { TimeLeft, Score, Questions, GameOver, dispatch } = useGameStore();
	const [Settings, setSettings] = useState(false);

	useEffect(() => {
		const timer = setInterval(() => {
			if (!GameOver) {
				if (TimeLeft > 0) {
					dispatch({ type: 'TimeLeft' });
				} else {
					dispatch({ type: 'GameOver' });
				}
			}
		}, 1000);
		return () => clearInterval(timer);
	}, [GameOver, Questions.length, Score, TimeLeft, dispatch]);

	if (GameOver || Score == Questions.length) {
		return null;
	}

	return (
		<article className='w-full m-0 p-2 rounded-none border-none'>
			<StateNode />

			<Timer
				Settings={Settings}
				setSettings={setSettings}
			/>

			{Settings ? (
				<div className='flex gap-2 flex-wrap'>
					<nav className='flex w-full gap-2 my-1 justify-between'>
						<NumberOfQuestionNode />
						<QuestionTimeNode />
					</nav>
					<RestartGameButton />
					<SettingsNode />
				</div>
			) : null}
		</article>
	);
};

export default GameHeader;
