import React from 'react';
import getPlaceValues from '../../../PlaceValues/Functions/getPlaceValues';

interface NumberBoxProps {
	value: number;
	isLast?: boolean; // Optional property for styling the last box
}

const Grade2Clue: React.FC<{ Question: ArithmeticQuestionType }> = ({ Question }) => {
	const {
		Operation,
		Question: { Operand1, Operand2 },
	} = Question;

	// Example usage
	const number = 25463;
	const result = getPlaceValues(number);
	console.log(result, number); // Output: { length: 3, H: 1, Tens: 3, Units: 4 }

	// Function to display individual number boxes with place value labels
	const NumberBox: React.FC<NumberBoxProps> = ({ value, isLast = false }) => (
		<span
			className={`p-1 rounded-full mr-2 bg-${value === Question.Answer ? 'rose-500' : 'blue-500'} ${
				isLast ? 'border-r border-gray-400' : ''
			}`}>
			{value} <span className='text-xs text-gray-500 ml-1'>{isLast ? 'Ones' : 'Tens'}</span>
		</span>
	);

	return (
		<article className='flex flex-wrap items-center justify-center'>
			{/* Display tens place for both numbers */}
			<NumberBox value={Math.floor(Operand1 / 10)} />
			<NumberBox
				value={Operand1 % 10}
				isLast
			/>
			{/* Separator for place values */}
			<span className='mt-1'>.</span>
			{/* Display ones place for both numbers */}
			<NumberBox value={Math.floor(Operand2 / 10)} />
			<NumberBox
				value={Operand2 % 10}
				isLast
			/>
			{/* Operator Operation */}
			<span className='mx-2 text-xl'>{Operation}</span>
			{/* Display individual digits of the Answer (optional) */}
			{Operation === '+' && (
				<>
					<NumberBox value={Math.floor(Question.Answer / 10)} />
					<NumberBox value={Math.floor((Question.Answer % 100) / 10)} />
					<span className='mt-1'>.</span>
					<NumberBox
						value={Question.Answer % 10}
						isLast
					/>
				</>
			)}
			{/* Highlight the correct Answer (optional) */}
			{Operation === '-' && (
				<span className={`p-1 rounded-full ml-2 bg-green-500`}>{Question.Answer}</span>
			)}
		</article>
	);
};

export default Grade2Clue;
