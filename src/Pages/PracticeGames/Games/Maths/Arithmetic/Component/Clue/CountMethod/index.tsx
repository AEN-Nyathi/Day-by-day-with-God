import { TiPlus } from 'react-icons/ti';
import Apple from './Elements/Apple';
import Apples from './Elements/Apples';

const CountMethod: React.FC<{
	Question: ArithmeticQuestionType;
}> = ({ Question }) => {
	// Apple for subtraction
	if (Question.Operation === '-') {
		const apples = Array.from(Array(Question.Question.Operand1)).map((_, index) => {
			// const color = index < Question.Question.Operand2 ? 'black' : 'white';
			return (
				<Apple
					StartFrom={-Question.Question.Operand2}
					AppleNumber={index + 1}
				/>
			);
		});
		return <div className='flex flex-wrap  justify-center'>{apples}</div>;
	}

	return (
		<article className='flex flex-wrap bg-gray-500/50  pb-2 justify-center'>
			<h2 className='p-1 mb-2'>Clue </h2>
			<Apples
				NumberOFApples={Question.Question.Operand1}
				color='black'
			/>
			<TiPlus className='w-5 h-5 md:w-8 md:h-8 ' />
			<Apples
				NumberOFApples={Question.Question.Operand2}
				StartFrom={Question.Question.Operand1}
				color='white'
			/>
		</article>
	);
};

export default CountMethod;
