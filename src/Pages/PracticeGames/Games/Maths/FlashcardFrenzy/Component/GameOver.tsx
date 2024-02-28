interface Question {
	sign: '-' | '+';
	question: string;
	answer: number;
	AvelableAnswers: number[];
	variable: { a: number; b: number };
}

interface GameoverProps {
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

const Gameover: React.FC<GameoverProps> = ({
	GameState,
	restartGame,
}) => {
	return (
		<main>
			<section>
				<article>
					<h1>Game Over</h1>
					<h2 className="my-4">
						Your Score is: {GameState.score}/{GameState.questions.length}
					</h2>
					<div>
						<h2>Question:</h2>
						<h3 className="bg-red-500/50 rounded-lg my-2 p-2">
							{GameState.questions[GameState.currentQuestionIndex].question}
						</h3>
						<h2>Answer: </h2>
						<h3 className="bg-red-500/50 rounded-lg my-2 p-3">
							{GameState.questions[GameState.currentQuestionIndex].answer}
						</h3>
					</div>

					<button className="w-full flex" onClick={restartGame}>
						Restart
					</button>
				</article>
			</section>
		</main>
	);
};

export default Gameover;
