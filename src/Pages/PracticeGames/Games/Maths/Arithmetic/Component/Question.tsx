/* eslint-disable no-mixed-spaces-and-tabs */
import { useGameStore } from '@Backend/hooks/useStore';
import { Suspense, lazy } from 'react';
import { IconContext } from 'react-icons';
import { TiEquals } from 'react-icons/ti';
import OperationsIcons from '../../components/Question/Elements/OperationsIcons';

const CountMethod = lazy(() => import('./Clue/CountMethod'));
// const Grade4Clue = lazy(() => import('./Clue/Grade4Clue'));

const Question: React.FC = () => {
	const { StudentGrade, Clue, Questions, CurrentQuestion } = useGameStore();
	const Question = Questions[CurrentQuestion] as ArithmeticQuestionType;

	return (
		<article className='bg-blue-500/50 m-0 grid '>
			<h2 className='w-full p-1 mb-2'>
				What Is The{' '}
				{Question.Operation == '+'
					? 'Sum'
					: Question.Operation == '-'
					? 'Difference'
					: Question.Operation == '*'
					? 'Product'
					: 'Quotient'}
				Of the two Numbers?
			</h2>
			<IconContext.Provider value={{ className: 'w-8 h-8 md:w-12 md:h-12 ' }}>
				<h1 className='flex justify-center gap-2'>
					{Question.Question.Operand1}
					<OperationsIcons />
					{Question.Question.Operand2}
					<TiEquals />
				</h1>
				<Suspense
					fallback={
						<article>
							<h2>
								Wrong Answer, wait for Clue on:{' '}
								<h1 className='flex justify-center gap-2'>
									{Question.Question.Operand1}
									<OperationsIcons />
									{Question.Question.Operand2}
									<TiEquals />
								</h1>
							</h2>
						</article>
					}>
					{Clue &&
					(StudentGrade == 'Grade-1' || StudentGrade == 'Grade-2') &&
					(Question.Operation == '+' || Question.Operation == '-') ? (
						<CountMethod Question={Question} />
					) : null}
					{/* 
					{Clue &&
					(StudentGrade == 'Grade-3' || StudentGrade == 'Grade-4') &&
					(Operation == '+' || Operation == '-') ? (
						<Grade4Clue
							Clue={Clue}
							Question={Question}
						/>
					) : null} */}
				</Suspense>
			</IconContext.Provider>
		</article>
	);
};

export default Question;
