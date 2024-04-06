import { useGameStore } from '@Backend/hooks/useStore';

export default function StateNode() {
	const { Score, Questions } = useGameStore();
	return (
		<div className='flex  justify-between gap-2 my-2'>
			<h2 className='text-xs md:text-sm p-2 text-center font-extrabold '>
				Score:
				<span className=' text-orange-500 font-semibold text-xs md:text-sm '>
					{Math.floor((Score / Questions.length) * 100)}%
				</span>
			</h2>
			<h2 className='text-xs md:text-sm p-2 text-center font-extrabold '>
				Questions:{' '}
				<span className=' text-orange-500 font-semibold text-xs md:text-sm '>
					{Questions.length}
				</span>
			</h2>
			<h2 className='text-xs md:text-sm p-2 text-center font-extrabold '>
				Question:{' '}
				<span className=' text-orange-500 font-semibold text-xs md:text-sm '>{Score + 1}</span>
			</h2>
		</div>
	);
}
