import { ReactNode } from 'react';
import { FaApple } from 'react-icons/fa';
import NumberBox from './NumberBox';
import { useGameStore } from '@Backend/hooks/useStore';

const Apple: React.FC<{
	children?: ReactNode;
	StartFrom: number;
	AppleNumber: number;
	color?: string;
}> = ({ children, StartFrom, AppleNumber, color }) => {
	const { Clue } = useGameStore();

	return (
		<div className={`grid place-items-center `}>
			<span className='relative flex justify-center'>
				<FaApple
					className='w-10 h-10 md:w-16 md:h-16 '
					color={color ? color : AppleNumber + StartFrom <= 0 ? 'black' : 'white'}
				/>
				<span className={`absolute text-base md:text-2xl mt-2  font-black text-red-500`}>
					{AppleNumber}
				</span>
			</span>
			{Clue > 1 ? (
				<NumberBox
					StartFrom={StartFrom}
					AppleNumber={AppleNumber + StartFrom}
				/>
			) : null}
			{children}
		</div>
	);
};

export default Apple;
