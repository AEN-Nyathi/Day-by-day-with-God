import { ReactNode } from 'react';
import Apple from './Apple';

const Apples: React.FC<{
	NumberOFApples: number;
	color: string;
	children?: ReactNode;
	StartFrom?: number;
}> = ({ NumberOFApples, color, children, StartFrom = 0 }) => {
	const apples = Array.from(Array(NumberOFApples)).map((_, index) => {
		return (
			<Apple
				StartFrom={StartFrom}
				AppleNumber={index + 1}
				color={color}>
				{children}
			</Apple>
		);
	});
	return <div className='flex flex-wrap justify-center'>{apples}</div>;
};

export default Apples;
