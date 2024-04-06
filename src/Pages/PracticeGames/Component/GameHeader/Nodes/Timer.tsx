import { useGameStore } from '@Backend/hooks/useStore';
import { CiSettings } from 'react-icons/ci';
interface TimerProps {
	setSettings: (value: React.SetStateAction<boolean>) => void;
	Settings: boolean;
}

export default function Timer({ setSettings, Settings }: TimerProps) {
	const { TimeLeft, QuestionTime } = useGameStore();
	return (
		<div className='flex'>
			<p className='text-xs md:text-sm p-0 mr-1 text-nowrap text-center font-extrabold '>
				Time Left:
			</p>
			<div className='w-full  bg-gray-200 rounded-full dark:bg-gray-700'>
				<div
					className={`${
						TimeLeft < 10 ? 'bg-red-500 ' : 'bg-blue-500'
					} rounded-full font-black text-xs text-blue-100 text-center p-0.5 leading-none rounded-full"`}
					style={{
						width: `${Math.floor((TimeLeft / QuestionTime) * 100)}%`,
					}}>
					{TimeLeft}s
				</div>
			</div>

			<CiSettings onClick={() => setSettings(!Settings)} />
		</div>
	);
}
