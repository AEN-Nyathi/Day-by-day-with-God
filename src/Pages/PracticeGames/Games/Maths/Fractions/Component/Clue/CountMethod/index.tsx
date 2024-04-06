import Apple from './Elements/Apple';
import Apples from './Elements/Apples';

const CountMethod: React.FC<{
	Question: ArithmeticQuestionType;
	
}> = ({ Question }) => {
	// Apple for subtraction
	if (Question.Operation === '-') {
		const apples = Array.from(Array(Question.Variable.Operand1)).map((_, index) => {
			// const color = index < Question.Variable.Operand2 ? 'black' : 'white';
			return (
				<Apple
					StartFrom={-Question.Variable.Operand2}
					AppleNumber={index + 1}
				/>
			);
		});
		return <div className='flex flex-wrap  justify-center'>{apples}</div>;
	}

	return (
		<div className='flex flex-wrap  justify-center'>
			<Apples
				NumberOFApples={Question.Variable.Operand1}
				color='black'
			/>
			<span className='self-center text-2xl text-blue-200'>+</span>
			<Apples
				NumberOFApples={Question.Variable.Operand2}
				StartFrom={Question.Variable.Operand1}
				color='white'
			/>
		</div>
	);
};

export default CountMethod;
