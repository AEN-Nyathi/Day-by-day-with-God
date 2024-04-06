import { useGameStore } from '@Backend/hooks/useStore';

const SpacailNumberSelect = () => {
	const { StudentGrade, SpacailNumber, Operation, dispatch } = useGameStore();
	return (
		<select
			hidden={StudentGrade == 'Grade-4' && Operation == '/'}
			value={SpacailNumber}
			onChange={(event) =>
				dispatch({
					type: 'Spacail-Number',
					data: parseInt(event.target.value) as SpecialNumberType,
				})
			}>
			<option
				value=''
				disabled>
				Spacail Number...
			</option>
			<option
				className='text-red-500'
				value={0}>
				Remove specail Number{' '}
			</option>
			<option value={1}>1 </option>
			<option value={2}>2</option>
			<option value={3}>3</option>
			<option value={4}>4</option>
			<option value={5}>5</option>
			<option value={6}>6</option>
			<option value={7}>7</option>
			<option value={8}>8</option>
			<option value={9}>9</option>
			{StudentGrade !== 'Grade-3' ? (
				<option
					disabled={Operation == '/' && StudentGrade == 'Grade-4'}
					value={10}>
					10
				</option>
			) : null}
			{StudentGrade !== 'Grade-3' && StudentGrade !== 'Grade-4' ? (
				<option value={100}>100</option>
			) : null}
			{StudentGrade !== 'Grade-3' && StudentGrade !== 'Grade-4' && StudentGrade !== 'Grade-5' ? (
				<option value={1000}>1000</option>
			) : null}
			{StudentGrade !== 'Grade-3' &&
			StudentGrade !== 'Grade-4' &&
			StudentGrade !== 'Grade-5' &&
			StudentGrade !== 'Grade-6' ? (
				<option value={10000}>10000</option>
			) : null}
			{StudentGrade !== 'Grade-3' &&
			StudentGrade !== 'Grade-4' &&
			StudentGrade !== 'Grade-5' &&
			StudentGrade !== 'Grade-6' ? (
				<option value={100000}>100000</option>
			) : null}
		</select>
	);
};

export default SpacailNumberSelect;
