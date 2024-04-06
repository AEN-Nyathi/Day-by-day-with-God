import React from 'react';
import getPlaceValues from '../../../PlaceValues/Functions/getPlaceValues';

const Grade4Clue: React.FC<{
	Question: ArithmeticQuestionType;
	Clue: number;
}> = ({ Question, Clue }) => {
	const {
		Answer,
		Operation,
		Variable: { Operand1, Operand2 },
	} = Question;

	const [operand1Result, operand2Result] = [getPlaceValues(Operand1), getPlaceValues(Operand2)];

	const placeValueGroups: React.ReactElement[] = [];
	const addByPlaceValueGroups: React.ReactElement[] = [];
	const placeValues: [
		'Millions',
		'HundredThousands',
		'TenThousands',
		'Thousands',
		'Hundreds',
		'Tens'
	] = ['Millions', 'HundredThousands', 'TenThousands', 'Thousands', 'Hundreds', 'Tens'];

	placeValues.forEach((placeValue) => {
		if (operand1Result[placeValue] || operand2Result[placeValue]) {
			placeValueGroups.push(
				<div key={placeValue}>
					<p className='w-full text-xs'>{placeValue}</p>
					<div className='flex bg-red-500 p-2 rounded-lg'>
						{operand1Result[placeValue] ? (
							<span className='text-xs'>{operand1Result[placeValue]}</span>
						) : null}
						{operand1Result[placeValue] && operand2Result[placeValue] ? (
							<span className='px-1 text-xs'>{Operation}</span>
						) : null}
						{operand2Result[placeValue] ? (
							<span className='text-xs'>{operand2Result[placeValue]}</span>
						) : null}
					</div>
				</div>
			);
			placeValueGroups.push(<span className='text-xs'>+</span>);
			addByPlaceValueGroups.push(
				<div
					key={placeValue + Math.random()}
					className='flex bg-gray-500 p-2 rounded-lg'>
					{operand1Result[placeValue] && operand2Result[placeValue] ? (
						<span className='text-xs'>
							{Operation == '+'
								? operand1Result[placeValue] + operand2Result[placeValue]
								: operand1Result[placeValue] - operand2Result[placeValue]}
						</span>
					) : (
						<span className='text-xs'>
							{operand1Result[placeValue] || operand2Result[placeValue]}
						</span>
					)}
				</div>
			);
			addByPlaceValueGroups.push(<span className='text-xs'>+</span>);
		}
	});

	return (
		<article>
			<div className=' flex flex-wrap gap-1  place-content-start my-2'>
				<p className='basis-full'>extend notation</p>
				<div className='flex bg-red-500 p-2 rounded-lg'>
					{placeValues.map((placeValue) => (
						<span
							key={placeValue}
							className='text-xs'>
							{operand1Result[placeValue] ? `${operand1Result[placeValue]} +` : null}
						</span>
					))}
					<span className='text-xs'>{operand1Result.Units}</span>
				</div>
				<span className='px-1 text-xs'>{Operation}</span>
				<div className='flex bg-red-500 p-2 rounded-lg'>
					{placeValues.map((placeValue) => (
						<span
							key={placeValue}
							className='text-xs'>
							{operand2Result[placeValue] ? `${operand2Result[placeValue]} +` : null}
						</span>
					))}
					<span className='text-xs'>{operand2Result.Units}</span>
				</div>
			</div>
			{Clue >= 2 ? (
				<div className=' flex flex-wrap gap-1  place-content-start my-2'>
					<p className='basis-full'>group by place values</p>
					{placeValueGroups}
					<div>
						<p className='w-full text-xs'>Units</p>
						<div className='flex bg-red-500 p-2 rounded-lg'>
							<span className='text-xs'>{operand1Result.Units}</span>
							<span className='px-1 text-xs'>{Operation}</span>
							<span className='text-xs'>{operand2Result.Units}</span>
						</div>
					</div>
				</div>
			) : null}
			{Clue >= 3 ? (
				<div className=' flex flex-wrap gap-1  place-content-start my-2'>
					<p className='basis-full'>Add or Minuse by place values</p>
					{addByPlaceValueGroups}
					<div className='flex bg-red-500 p-2 rounded-lg'>
						<span className='text-xs'>
							{Operation == '+'
								? operand1Result.Units + operand2Result.Units
								: operand1Result.Units - operand2Result.Units}
						</span>
					</div>
				</div>
			) : null}
			{Clue >= 4 ? (
				<div className=' flex flex-wrap gap-1  place-content-start my-2'>
					<p className='basis-full'> a</p>
					<div className='flex bg-red-500 p-2 rounded-lg'>
						<span className='text-xs'>{Answer}</span>
					</div>
				</div>
			) : null}
		</article>
	);
};

export default Grade4Clue;
