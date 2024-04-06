import { BsQuestionSquare } from 'react-icons/bs';
import FractionNode from '../../Number/FractionNode';
import PowerNode from '../../Number/PowerNode';

const Operand: React.FC<{
	Operand:
		| GamesStoreType['Questions'][number]['Question']['Operand1']
		| GamesStoreType['Questions'][number]['Question']['Operand2'];
	type: GameNamesTypes;
	
}> = ({ Operand, type }) => {
	switch (type) {
		case 'Fractions':
			return <FractionNode Operand={Operand as FractionType} />;
		case 'MissingNumber':
			return typeof Operand == 'number' ? Operand : <BsQuestionSquare />;
		case 'Arithmetic':
			return Operand as number;
		case 'Exponents':
			return typeof Operand == 'number' ? Operand : <PowerNode Operand={Operand as PowerType} />;
	}
};

export default Operand;
