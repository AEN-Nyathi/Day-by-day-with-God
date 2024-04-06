import { useGameStore } from '@Backend/hooks/useStore';

export default function QuestionTimeNode() {
	const { QuestionTime, Questions, dispatch } = useGameStore();
	return (
		<select
			value={QuestionTime}
			className='w-full '
			onChange={(event) => {
				console.log('Questions', Questions);
				dispatch({
					type: 'Question-Time',
					data: parseInt(event.target.value),
				});
			}}>
			<option
				value=''
				disabled>
				Question Time...
			</option>
			<option value={100}>Questions Time 100s</option>
			<option value={150}>Questions Time 150s</option>
			<option value={200}>Questions Time 200s</option>
			<option value={250}>Questions Time 250s</option>
			<option value={300}>Questions Time 300s</option>
			<option value={350}>Questions Time 350s</option>
			<option value={400}>Questions Time 400s</option>
			<option value={450}>Questions Time 450s</option>
			<option value={500}>Questions Time 500s</option>
			<option value={500}>Questions Time 500s</option>
			<option value={1000}>Questions Time 1000s</option>
		</select>
	);
}
