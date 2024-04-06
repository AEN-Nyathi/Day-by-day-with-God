import { useGameStore } from '@Backend/hooks/useStore';
import { TiArrowShuffle } from 'react-icons/ti';

const Format = () => {
	const { StudentGrade, Format, dispatch } = useGameStore();

	return (
		<nav className='flex gap-1 '>
			{StudentGrade !== 'Grade-1' &&
			StudentGrade !== 'Grade-2' &&
			StudentGrade !== 'Grade-3' &&
			StudentGrade !== 'Grade-4' &&
			Format !== 'Format-A' ? (
				<button
					className=''
					onClick={() => {
						dispatch({
							type: 'Set-Format',
							data: 'Format-A',
						});
					}}>
					Format-A
				</button>
			) : null}

			{StudentGrade !== 'Grade-1' &&
			StudentGrade !== 'Grade-2' &&
			StudentGrade !== 'Grade-3' &&
			StudentGrade !== 'Grade-4' &&
			Format !== 'Format-B' ? (
				<button
					className=''
					onClick={() => {
						dispatch({
							type: 'Set-Format',
							data: 'Format-B',
						});
					}}>
					Format-B
				</button>
			) : null}
			{StudentGrade !== 'Grade-1' &&
			StudentGrade !== 'Grade-2' &&
			StudentGrade !== 'Grade-3' &&
			StudentGrade !== 'Grade-4' &&
			Format !== 'Both' ? (
				<button
					className=''
					onClick={() => {
						dispatch({
							type: 'Set-Format',
							data: 'Both',
						});
					}}>
					<TiArrowShuffle /> Mix Formats
				</button>
			) : null}
		</nav>
	);
};

export default Format;
