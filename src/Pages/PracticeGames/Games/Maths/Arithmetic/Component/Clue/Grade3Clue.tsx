const Grade3Clue: React.FC<{
	Question: ArithmeticQuestionType;
	Clue: number;
}> = ({ Question, Clue }) => {
	return (
		<ul className='bg-red-500 p-2 rounded-lg  place-content-center'>
			<li className='grid grid-cols-5 place-items-center  text-2xl font-black border-b-2 pb-2'>
				<span className='col-span-2 p-2 text-dark dark:text-light bg-light/80 w-full dark:bg-dark/80 rounded-lg'>
					{Question.Question.Operand1}
				</span>
				{Question.Operation}
				<span className='col-span-2 p-2 text-dark dark:text-light bg-light/80 w-full dark:bg-dark/80 rounded-lg'>
					{Question.Question.Operand2}
				</span>
			</li>
			<li className='grid grid-cols-5 place-items-center  text-2xl font-black border-b-2 py-2'>
				<span className='col-span-2 p-2 text-dark dark:text-light bg-light/80 w-full dark:bg-dark/80 rounded-lg'>
					{Question.Question.Operand1 - (Question.Question.Operand1 % 10)} +{' '}
					{Question.Question.Operand1 % 10}
				</span>
				{Question.Operation}
				<span className='col-span-2 p-2 text-dark dark:text-light bg-light/80 w-full dark:bg-dark/80 rounded-lg'>
					{Question.Question.Operand2 - (Question.Question.Operand2 % 10)} +{' '}
					{Question.Question.Operand2 % 10}
				</span>
			</li>
			{Clue > 1 ? (
				<li className='grid grid-cols-5 place-items-center  text-2xl font-black border-b-2 py-2'>
					<span className='col-span-2 p-2 text-dark dark:text-light bg-light/80 w-full dark:bg-dark/80 rounded-lg'>
						{Question.Question.Operand1 - (Question.Question.Operand1 % 10)} +{' '}
						{Question.Question.Operand2 - (Question.Question.Operand2 % 10)}
					</span>
					{Question.Operation}
					<span className='col-span-2 p-2 text-dark dark:text-light bg-light/80 w-full dark:bg-dark/80 rounded-lg'>
						{Question.Question.Operand1 % 10} + {Question.Question.Operand2 % 10}
					</span>
				</li>
			) : null}
			{Clue > 2 ? (
				<li className='grid grid-cols-5 place-items-center  text-2xl font-black border-b-2 py-2'>
					<span className='col-span-2 p-2 text-dark dark:text-light bg-light/80 w-full dark:bg-dark/80 rounded-lg'>
						{Question.Question.Operand1 -
							(Question.Question.Operand1 % 10) +
							Question.Question.Operand2 -
							(Question.Question.Operand2 % 10)}
					</span>
					{Question.Operation}
					<span className='col-span-2 p-2 text-dark dark:text-light bg-light/80 w-full dark:bg-dark/80 rounded-lg'>
						{(Question.Question.Operand1 % 10) + (Question.Question.Operand2 % 10)}
					</span>
				</li>
			) : null}
		</ul>
	);
};

export default Grade3Clue;
