interface SelectedAnswerProps {
	AvelableAnswers: number[];
	QuestionAnswer: number;
	CorrectAnwser: () => void;
	inCorrectAnwser: (grade: "grade1" | "grade2" | "grade3" | undefined) => void;
	grade: "grade1" | "grade2" | "grade3" | undefined;
}

const AnswerOptions: React.FC<SelectedAnswerProps> = ({
	AvelableAnswers,
	CorrectAnwser,
	QuestionAnswer,
	inCorrectAnwser,
	grade,
}) => {
	const handleAnswerClick = (
		SelectedAnswer: number,
		QuestionAnswer: number,
		CorrectAnswer: () => void,
		inCorrectAnwser: (grade: "grade1" | "grade2" | "grade3" | undefined) => void
	) => {
		if (SelectedAnswer == QuestionAnswer) {
			CorrectAnswer();
		} else {
			inCorrectAnwser(grade);
			console.log(`Incorrect answer. The correct answer is ${QuestionAnswer}`);
		}
	};
	return (
		<article className=" rounded-lg shadow-md p-4 mb-8">
			<ul className="grid grid-cols-3 md:grid-cols-11 gap-4">
				{AvelableAnswers.filter((answer) => answer >= 0).map((AvelableAnswer) => {
					return (
						<li key={Math.random() * 1000}>
							<button
								onClick={() => {
									handleAnswerClick(
										AvelableAnswer,
										QuestionAnswer,
										CorrectAnwser,
										inCorrectAnwser
									);
								}}
								className="w-full bg-yellow-500/50 text-2xl md:text-4xl p-1 hover:bg-yellow-500 active:bg-blue-500">
								{AvelableAnswer}
							</button>
						</li>
					);
				})}
			</ul>
		</article>
	);
};

export default AnswerOptions;
