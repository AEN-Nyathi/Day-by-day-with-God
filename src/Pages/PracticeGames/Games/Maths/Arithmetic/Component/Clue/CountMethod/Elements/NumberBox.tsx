const NumberBox: React.FC<{
	AppleNumber: number;
	StartFrom?: number;
}> = ({ StartFrom, AppleNumber }) => {
	return (
		<span
			className={`${
				StartFrom && AppleNumber <= 0 ? 'bg-green-500' : 'bg-blue-500'
			} p-1 md:p-2 md:text-xl font-black rounded-full`}>
			{StartFrom && AppleNumber <= 0 ? AppleNumber - StartFrom : AppleNumber}
		</span>
	);
};

export default NumberBox;
