
interface Question {
	sign: '-' | '+';
	question: string;
	answer: number;
	AvelableAnswers: number[];
	variable: { a: number; b: number };
}

const Grade3Clue: React.FC<{
	question: Question;
	Clue: number ;
}> = ({ question, Clue }) => {
	return (
		<ul className="bg-gray-500 p-2 rounded-lg  place-content-center">
			<li className="grid grid-cols-5 place-items-center  text-2xl font-black border-b-2 pb-2">
				<span className="col-span-2 p-2 text-dark dark:text-light bg-light/80 w-full dark:bg-dark/80 rounded-lg">
					{question.variable.a}
				</span>
				{question.sign}
				<span className="col-span-2 p-2 text-dark dark:text-light bg-light/80 w-full dark:bg-dark/80 rounded-lg">
					{question.variable.b}
				</span>
			</li>
			<li className="grid grid-cols-5 place-items-center  text-2xl font-black border-b-2 py-2">
				<span className="col-span-2 p-2 text-dark dark:text-light bg-light/80 w-full dark:bg-dark/80 rounded-lg">
					{Math.round(question.variable.a - (question.variable.a % 10))} +{' '}
					{question.variable.a % 10}
				</span>
				{question.sign}
				<span className="col-span-2 p-2 text-dark dark:text-light bg-light/80 w-full dark:bg-dark/80 rounded-lg">
					{Math.round(question.variable.b - (question.variable.b % 10))} +{' '}
					{question.variable.b % 10}
				</span>
			</li>
			{Clue > 1 ? (
				<li className="grid grid-cols-5 place-items-center  text-2xl font-black border-b-2 py-2">
					<span className="col-span-2 p-2 text-dark dark:text-light bg-light/80 w-full dark:bg-dark/80 rounded-lg">
						{Math.round(question.variable.a - (question.variable.a % 10))} +{' '}
						{Math.round(question.variable.b - (question.variable.b % 10))}
					</span>
					{question.sign}
					<span className="col-span-2 p-2 text-dark dark:text-light bg-light/80 w-full dark:bg-dark/80 rounded-lg">
						{question.variable.a % 10} + {question.variable.b % 10}
					</span>
				</li>
			) : null}
			{Clue > 2 ? (
				<li className="grid grid-cols-5 place-items-center  text-2xl font-black border-b-2 py-2">
					<span className="col-span-2 p-2 text-dark dark:text-light bg-light/80 w-full dark:bg-dark/80 rounded-lg">
						{Math.round(question.variable.a - (question.variable.a % 10)) +
							Math.round(question.variable.b - (question.variable.b % 10))}
					</span>
					{question.sign}
					<span className="col-span-2 p-2 text-dark dark:text-light bg-light/80 w-full dark:bg-dark/80 rounded-lg">
						{(question.variable.a % 10) + (question.variable.b % 10)}
					</span>
				</li>
			) : null}
		</ul>
	);
};

export default Grade3Clue;
