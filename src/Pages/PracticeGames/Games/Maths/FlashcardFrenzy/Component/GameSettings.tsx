import { BiMinus, BiPlus } from 'react-icons/bi';
import GrenereteQuetions from '../Fuction/GrenereteQuetions';
interface Question {
	sign: '-' | '+';
	question: string;
	answer: number;
	AvelableAnswers: number[];
	variable: { a: number; b: number };
}
interface GameSettingsProps {
	grade: 'grade1' | 'grade2' | 'grade3' | undefined;
	setGameState: React.Dispatch<
		React.SetStateAction<{
			gameOver: boolean;
			timeLeft: number;
			score: number;
			clue: number;
			questions: Question[];
			currentQuestionIndex: number;
			QuestionTime: number;
		}>
	>;
}

const GameSettings: React.FC<GameSettingsProps> = ({ setGameState, grade }) => {
	return (
		<article className="flex gap-2 justify-between">
			<button
				className="w-full"
				onClick={() => {
					setGameState({
						clue: 0,
						score: 0,
						timeLeft: 100,
						gameOver: false,
						currentQuestionIndex: 0,
						QuestionTime: 100,
						questions: GrenereteQuetions(
							grade,
							'+',
							grade == 'grade1' ? 38 : 10
						),
					});
				}}>
				<BiPlus />
			</button>
			<button
				className="w-full"
				onClick={() => {
					setGameState({
						clue: 0,
						score: 0,
						timeLeft: 100,
						gameOver: false,
						currentQuestionIndex: 0,
						QuestionTime: 100,
						questions: GrenereteQuetions(
							grade,
							'-',
							grade == 'grade1' ? 55 : 10
						),
					});
				}}>
				<BiMinus />
			</button>
			<button
				className="w-full flex"
				onClick={() => {
					setGameState({
						clue: 0,
						score: 0,
						timeLeft: 100,
						gameOver: false,
						currentQuestionIndex: 0,
						QuestionTime: 100,
						questions: [
							...GrenereteQuetions(grade, '+', grade == 'grade1' ? 38 : 10),
							...GrenereteQuetions(grade, '-', grade == 'grade1' ? 55 : 10),
						].sort(() => Math.random() - 0.5),
					});
				}}>
				<BiPlus /> <BiMinus />
			</button>
		</article>
	);
};

export default GameSettings;
