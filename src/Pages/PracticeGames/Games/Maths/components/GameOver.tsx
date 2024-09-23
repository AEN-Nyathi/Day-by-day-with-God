/* eslint-disable no-mixed-spaces-and-tabs */
import { useGameStore } from '@Backend/hooks/useStore';
import CalculationQuestionsElement from './Question/Calculations';
import Operand from './Question/Elements/Operand';
import { MdRestartAlt } from 'react-icons/md';
import OperationsIcons from './Question/Elements/OperationsIcons';
import { TiEquals } from 'react-icons/ti';

const Gameover: React.FC = () => {
	const { Score, Questions, CurrentQuestion, dispatch } = useGameStore();
	return (
		<main>
			<section>
				<article>
					<h1>Game Over</h1>
					<h2 className='my-4'>
						Your Score is: {Score}/{Questions.length}
					</h2>
					<div>
						<CalculationQuestionsElement />
						<article className='bg-blue-500/50'>
							<h2 className='p-2 mb-2'>Answer: </h2>
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
								<Operand
									Operand={Questions[CurrentQuestion].Answer}
									type={Questions[CurrentQuestion].type}
								/>
							</h1>
						</article>
					</div>

					<button
						className='w-full border-red-500 text-red-950 bg-red-500 dark:text-red-50 flex'
						onClick={() => dispatch({ type: 'RestartGame' })}>
						<MdRestartAlt /> Restart Game
					</button>
				</article>
			</section>
		</main>
	);
};

export default Gameover;
