import { GiBanana } from 'react-icons/gi';
interface Question {
	sign: '-' | '+';
	question: string;
	answer: number;
	AvelableAnswers: number[];
	variable: { a: number; b: number };
}

const Grade2Clue: React.FC<{ question: Question }> = ({ question }) => {
	const apples = Array.from(Array(question.variable.a)).map((_, index) => (
		<GiBanana key={index} scale={2} color="black" />
	));
	const plusMinus = question.sign === '+' ? '+' : '-';
	const apples2 = Array.from(Array(question.variable.b)).map((_, index) => (
		<GiBanana key={index} scale={2} color="white" />
	));
	return (
		<article className="flex flex-wrap w-full bg-gray-500 py-2 justify-center">
			{apples}
			{plusMinus}
			{apples2}
		</article>
	);
};

export default Grade2Clue;
