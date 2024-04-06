import { useGameStore } from '@Backend/hooks/useStore';

export default function NumberOfQuestionNode() {
	const { StudentGrade, Questions, Operation, dispatch } = useGameStore();
	return (
		<select
			value={Questions.length}
			className='w-full'
			onChange={(event) =>
				dispatch({
					type: 'Number-Of-Question',
					data: parseInt(event.target.value) as GamesStoreType['NumberOfQuestion'],
				})
			}>
			<option
				value=''
				disabled>
				Number Of Questions...
			</option>
			<option value={5}>5 Questions</option>
			<option value={10}>10 Questions</option>
			<option value={15}>15 Questions</option>
			<option value={20}>20 Questions</option>
			{StudentGrade !== 'Grade-4' && Operation == '/' ? (
				<option value={25}>25 Questions</option>
			) : null}
			{StudentGrade !== 'Grade-4' && Operation == '/' ? (
				<option value={30}>30 Questions</option>
			) : null}
			{StudentGrade !== 'Grade-4' && Operation == '/' ? (
				<option value={35}>35 Questions</option>
			) : null}
			{StudentGrade !== 'Grade-4' && Operation == '/' ? (
				<option value={40}>40 Questions</option>
			) : null}
			{StudentGrade !== 'Grade-4' && Operation == '/' ? (
				<option value={45}>45 Questions</option>
			) : null}
			{StudentGrade !== 'Grade-1' && StudentGrade !== 'Grade-4' ? (
				<option value={50}>50 Questions</option>
			) : null}
			{StudentGrade !== 'Grade-1' && StudentGrade !== 'Grade-4' ? (
				<option value={55}>55 Questions</option>
			) : null}
		</select>
	);
}
