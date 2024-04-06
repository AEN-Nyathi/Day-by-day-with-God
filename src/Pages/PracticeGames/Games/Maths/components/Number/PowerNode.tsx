const PowerNode: React.FC<{ Operand: PowerType }> = ({ Operand }) => {
	return (
		<span className='relative  mr-2 text-4xl'>
			{Operand.Base}{' '}
			<span className='absolute text-xl -top-1 -right-4 '>
				{Operand.Exponent}
			</span>
		</span>
	);
};

export default PowerNode;
