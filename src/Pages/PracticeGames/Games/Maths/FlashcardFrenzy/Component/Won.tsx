interface Question {
	sign: '-' | '+';
	question: string;
	answer: number;
	AvelableAnswers: number[];
	variable: { a: number; b: number };
}
interface WonProps {
	restartGame: () => void;
	GameState: {
		gameOver: boolean;
		timeLeft: number;
		score: number;
		clue: number;
		questions: Question[];
		currentQuestionIndex: number;
	};
}

const Won: React.FC<WonProps> = ({GameState, restartGame}) => {
	return (
		<main>
			<section>
				<article>
					<h1>Congradulation you have complited all Questions</h1>
					<h2 className="my-4">
						wow, you have won {GameState.score} / {GameState.questions.length}
					</h2>
					<h3>{(GameState.score / GameState.questions.length) * 100}%</h3>
					<button
						className="w-full flex"
						onClick={() => {
							restartGame();
						}}>
						Restart
					</button>
				</article>
			</section>
		</main>
	);
};

export default Won;
