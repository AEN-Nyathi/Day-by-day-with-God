interface Question {
	sign: '-' | '+';
	question: string;
	answer: number;
	AvelableAnswers: number[];
	variable: { a: number; b: number };
}

interface GameHeaderProps {
	restartGame: () => void;
	GameState: {
		gameOver: boolean;
		timeLeft: number;
		score: number;
		clue: number;
		questions: Question[];
		currentQuestionIndex: number;
			QuestionTime: number;
	};
}
const GameHeader: React.FC<GameHeaderProps> = ({ GameState, restartGame }) => {
	return (
		<article>
			<div className="flex items-center">
				<p className="mr-2">Time Left:</p>
				<div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
					<div
						className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
						style={{
							width: `${(GameState.timeLeft / GameState.QuestionTime) * 100}%`,
						}}>
						{Math.floor((GameState.timeLeft / GameState.QuestionTime) * 100)}s
					</div>
				</div>
				<p className="ml-2">{GameState.timeLeft}s</p>
			</div>
			<div className="flex items-center justify-between">
				<h3 className="text-lg font-bold">
					Score: {GameState.score}/{GameState.questions.length}
				</h3>
				<button onClick={restartGame}>Restart Game</button>
			</div>
		</article>
	);
};

export default GameHeader;
