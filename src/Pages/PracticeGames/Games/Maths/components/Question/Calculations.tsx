import { IconContext } from 'react-icons';
import OperationsIcons from './Elements/OperationsIcons';
import { useGameStore } from '@Backend/hooks/useStore';
import { TiEquals } from 'react-icons/ti';
import Operand from './Elements/Operand';

const CalculationQuestionsElement = () => {
	const { Questions, CurrentQuestion } = useGameStore();
	const Question = Questions[CurrentQuestion];

	return (
		<article className='bg-blue-500/50 m-0 grid'>
			<IconContext.Provider value={{ className: 'w-8 h-8 md:w-12 md:h-12 ' }}>
				<h2 className='w-full p-2'>{Question.type} Calculation Question</h2>
				<h3 className='w-full text-base text-amber-500 p-1 '>
					What Is The{' '}
					{Question.Operation == '+'
						? 'Sum'
						: Question.Operation == '-'
						? 'Difference'
						: Question.Operation == '*'
						? 'Product'
						: 'Quotient'}{' '}
					of The Two Values?
				</h3>
				{Question.type == 'Arithmetic' && Question.Operation == '**' ? (
					<h1>
						<Operand
							Operand={
								{
									Base: Question.Question.Operand1,
									Exponent: Question.Question.Operand2,
								} as PowerType
							}
							type='Exponents'
						/>
					</h1>
				) : (
					<h1>
						{typeof Questions[CurrentQuestion].Question !== 'number' ? (
							<Operand
								Operand={Questions[CurrentQuestion].Question.Operand1}
								type={Questions[CurrentQuestion].type}
							/>
						) : (
							<Operand
								Operand={Questions[CurrentQuestion].Question}
								type={Questions[CurrentQuestion].type}
							/>
						)}

						<OperationsIcons />
						{typeof Questions[CurrentQuestion].Question !== 'number' ? (
							<Operand
								Operand={Questions[CurrentQuestion].Question.Operand2}
								type={Questions[CurrentQuestion].type}
							/>
						) : (
							<Operand
								Operand={Questions[CurrentQuestion].Question}
								type={Questions[CurrentQuestion].type}
							/>
						)}

						<TiEquals />
					</h1>
				)}
			</IconContext.Provider>
		</article>
	);
};

export default CalculationQuestionsElement;
