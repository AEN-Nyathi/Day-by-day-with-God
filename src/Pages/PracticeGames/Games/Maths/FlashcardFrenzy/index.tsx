import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import wrongAnswerSound from '@Images/Sound/wrongAnswer.mp3';
import CorrectAnswerSound from '@Images/Sound/correctAnswer.mp3';
import gameOver from '@Images/Sound/gameOver.mp3';
import GameHeader from './Component/GameHeader';
import AnswerOptions from './Component/AnswerOptions';
import GameSettings from './Component/GameSettings';
import Gameover from './Component/GameOver';
import GrenereteQuetions from './Fuction/GrenereteQuetions';
import Grade1Clue from './Component/Clue/Grade1Clue';
import Grade2Clue from './Component/Clue/Grade2Clue';
import Grade3Clue from './Component/Clue/Grade3Clue';
import Won from './Component/Won';
interface Question {
	sign: '-' | '+';
	question: string;
	answer: number;
	AvelableAnswers: number[];
	variable: { a: number; b: number };
}
interface GameState {
	gameOver: boolean;
	timeLeft: number;
	QuestionTime: number;
	score: number;
	clue: number;
	questions: Question[];
	currentQuestionIndex: number;
}

const SumAndDiffirence: React.FC = () => {
	const { grade } = useParams<{ grade: 'grade1' | 'grade2' | 'grade3' }>();
	const [GameState, setGameState] = useState({
		gameOver: false,
		timeLeft: 100,
		QuestionTime: 100,
		score: 0,
		clue: 0,
		questions: GrenereteQuetions(grade, '+', grade == 'grade1' ? 38 : 10),
		currentQuestionIndex: 0,
	});
	const updateGameState = (updater: (prev:  GameState) => GameState) => {
		setGameState((prev) => updater(prev));
	};

	const scrollRef = useRef<HTMLDivElement | null>(null);

	const handleScrollIntoView = useCallback(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
		}
	}, []);
	useEffect(() => {
		handleScrollIntoView();
	}, [handleScrollIntoView, GameState.currentQuestionIndex]);

	const playSound = (sound: HTMLAudioElement) => {
		sound.currentTime = 0; // Reset sound to beginning before playing
		sound.play();
	};

	const correctSound = new Audio(CorrectAnswerSound);
	const wrongSound = new Audio(wrongAnswerSound);
	const gameOverSound = new Audio(gameOver);

	useEffect(() => {
		const timer = setInterval(() => {
			if (GameState.timeLeft > 0) {
				updateGameState((prev) => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
			} else {
				updateGameState((prev) => ({ ...prev, gameOver: true }));
			}
		}, 1000);
		return () => clearInterval(timer);
	}, [GameState.questions, GameState]);

	const restartGame = () => {
		updateGameState(() => ({
			gameOver: false,
			timeLeft: 100,
			QuestionTime: 100,
			score: 0,
			clue: 0,
			questions: GrenereteQuetions(grade, '+', grade == 'grade1' ? 38 : 10),
			currentQuestionIndex: 0,
		}));
	};

	if (grade !== 'grade1') {
		if (GameState.score == GameState.questions.length - 1) {
			updateGameState((prevGameState) => {
				return {
					...prevGameState,
					timeLeft: prevGameState.QuestionTime - 10,
					QuestionTime: prevGameState.QuestionTime - 10,
					questions: GrenereteQuetions(
						grade,
						'+',
						GameState.questions.length + 10
					),
				};
			});
		}
	}

	const CorrectAnwser = () => {
		playSound(correctSound);
		updateGameState((prevGameState) => {
			return {
				...prevGameState,
				timeLeft: prevGameState.QuestionTime,
				score: prevGameState.score + 1,
				clue: 0,
				currentQuestionIndex:
					(prevGameState.currentQuestionIndex + 1) %
					prevGameState.questions.length,
			};
		});
	};

	const inCorrectAnwser = () => {
		updateGameState((prev: GameState) => {
			const newClue = prev.clue + 1;
			if (isGameOver(newClue, grade)) {
				playSound(gameOverSound);
				return { ...prev, gameOver: true };
			}
			playSound(wrongSound);
			return { ...prev, clue: newClue };
		});
	};

	const isGameOver = (
		clueCount: number,
		grade: 'grade1' | 'grade2' | 'grade3' | undefined
	) => {
		return clueCount >= (grade === 'grade1' ? 2 : grade === 'grade2' ? 2 : 4);
	};

	if (GameState.gameOver) {
		return <Gameover restartGame={restartGame} GameState={GameState} />;
	} else if (GameState.score == GameState.questions.length) {
		return <Won restartGame={restartGame} GameState={GameState} />;
	}
	return (
		<main>
			<section>
				<h2 className="m-0">Sum And Diffirence</h2>
				<GameHeader restartGame={restartGame} GameState={GameState} />

				<article className="flex">
					<div>
						<h1>
							{GameState.questions[GameState.currentQuestionIndex].question}
						</h1>
						{GameState.clue ? (
							<h4 className="text-red-500">wrong Answer</h4>
						) : null}
					</div>
					{grade == 'grade1' && GameState.clue ? (
						<Grade1Clue
							question={GameState.questions[GameState.currentQuestionIndex]}
						/>
					) : grade == 'grade2' && GameState.clue ? (
						<Grade2Clue
							question={GameState.questions[GameState.currentQuestionIndex]}
						/>
					) : grade == 'grade3' && GameState.clue ? (
						<Grade3Clue
							Clue={GameState.clue}
							question={GameState.questions[GameState.currentQuestionIndex]}
						/>
					) : null}
				</article>
				<article ref={scrollRef} className=" rounded-lg shadow-md p-4 mb-8">
					<AnswerOptions
						AvelableAnswers={
							GameState.questions[GameState.currentQuestionIndex]
								.AvelableAnswers
						}
						inCorrectAnwser={inCorrectAnwser}
						grade={grade}
						CorrectAnwser={CorrectAnwser}
						QuestionAnswer={
							GameState.questions[GameState.currentQuestionIndex].answer
						}
					/>
				</article>
				<GameSettings grade={grade} setGameState={setGameState} />
			</section>
		</main>
	);
};
export default SumAndDiffirence;
