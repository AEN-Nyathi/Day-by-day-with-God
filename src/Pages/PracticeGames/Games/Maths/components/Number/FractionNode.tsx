const FractionNode: React.FC<{ Operand: FractionType }> = ({ Operand }) => {
	return (
		<div className='grid place-content-center'>
			<span className='p-0 m-0 border-b-2'>{Operand.Numerator}</span>
			<span>{Operand.Denominator}</span>
		</div>
	);
};

export default FractionNode