import { useCallback, useState } from 'react';
import generatePossibleNumber from './Functions/generatePossibleNumber';
import { FaApple } from 'react-icons/fa';

interface Question {
	question: number;
	options: number[];
}

const PlaceNumbersInOrderGrade1: React.FC = () => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [WrongAnswer, setWrongAnswer] = useState(false);
	const [Answer, setAnswer] = useState<number[]>([]);
	const [Clue, setClue] = useState(false);

	const [questions, setQuestions] = useState<Question[]>(
		generatePossibleNumber(10)
	);

	const handleAnswerClick = useCallback(
		(option: number) => {
			if (
				currentQuestionIndex >= 0 &&
				currentQuestionIndex < questions.length
			) {
				const selectedAnswer = questions[currentQuestionIndex].question;
				if (option) {
					setAnswer((answer) => [...answer, option]);
					setClue(false);
					setScore(score + 1);
					setCurrentQuestionIndex(
						(prevIndex) => (prevIndex + 1) % questions.length
					);
				} else {
					if (Clue) {
						setWrongAnswer(true);
						console.log(
							`Incorrect answer. The correct answer is ${selectedAnswer}`
						);
					} else {
						setClue(true);
					}
				}
			} else {
				console.error('Error: Current index is out of bounds.');
			}
		},
		[Clue, currentQuestionIndex, questions, score]
	);

	if (score == questions.length) {
		return (
			<main>
				<section>
					<article>
						<h1>Congradulation you have complited all Questions</h1>
						<h2 className="my-4">
							wow, you have won {score}/{questions.length}
						</h2>
						<h3>{(score / questions.length) * 100}%</h3>
						<button
							className="w-full flex"
							onClick={() => {
								setScore(0);
								setWrongAnswer(false);
								setQuestions(generatePossibleNumber(10));
							}}>
							Restart
						</button>
					</article>
				</section>
			</main>
		);
	} else if (WrongAnswer) {
		return (
			<main>
				<section>
					<article>
						<h1>Game Over</h1>
						<h2 className="my-4">
							Your Score is: {score}/{questions.length}
						</h2>
						<div>
							<h2>Question:</h2>
							<h3 className="bg-red-500/50 rounded-lg my-2 p-2">
								{Array.from(
									Array(questions[currentQuestionIndex].question)
								).map((_, index) => (
									<FaApple color="black" key={index} />
								))}
							</h3>
							<h2>Answer: </h2>
							<h3 className="bg-red-500/50 rounded-lg my-2 p-3">
								{questions[currentQuestionIndex].question}
							</h3>
						</div>

						<button
							className="w-full flex"
							onClick={() => {
								setScore(0);
								setClue(false);
								setWrongAnswer(false);
								setQuestions(generatePossibleNumber(10));
							}}>
							Restart
						</button>
					</article>
				</section>
			</main>
		);
	}
	return (
		<main>
			<section>
				<h2 className="m-0">Flashcard Frenzy</h2>
				<article>
					<div>
						<h3 className="m-0">
							Score: {score}/{questions.length}
						</h3>
						<ul className="grid grid-cols-3 md:grid-cols-11 gap-4">
							{Answer.map((answer) => (
								<line
									key={answer}
									className="border-green-500 font-bold  border-2 rounded-md inline-flex justify-center duration-200 w-full bg-yellow-500/50 text-2xl md:text-4xl p-1 hover:bg-yellow-500 active:bg-blue-500">
									{answer}
								</line>
							))}
						</ul>
					</div>
				</article>

				<article className=" rounded-lg shadow-md p-4 mb-8">
					<ul className="grid grid-cols-3 md:grid-cols-11 gap-4">
						{questions[currentQuestionIndex].options
							.sort(() => Math.random() - 0.5)
							.map((option) => {
								return (
									<li key={option}>
										<button
											onClick={() => {
												handleAnswerClick(option);
											}}
											className="w-full bg-yellow-500/50 text-2xl md:text-4xl p-1 hover:bg-yellow-500 active:bg-blue-500">
											{option}
										</button>
									</li>
								);
							})}
					</ul>
				</article>
			</section>
		</main>
	);
};

export default PlaceNumbersInOrderGrade1;
