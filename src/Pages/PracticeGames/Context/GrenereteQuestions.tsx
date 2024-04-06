import ArithmeticQuetions from '../Games/Maths/Arithmetic/Function/ArithmeticGradeBasedQuestions';
import GenerateExponentsQuestions from '../Games/Maths/Exponents/Function/GenerateFractionsQuestions';
import GenerateNumbers from '../Games/Maths/FindNumber/Functions/GenerateNumbers';
import GenerateFractionsQuestions from '../Games/Maths/Fractions/Function/FractionsGradeBasedQuestions';
import MissingNumberQuetions from '../Games/Maths/MissingNumber/Function/MissingNumberGradeBasedQuestions';

const GrenereteQuestions = (
	GameName: GameNamesTypes,
	StudentGrade: StudentGradeType,
	Operation: OperationType,
	NumberOfQuestions: NumberOfQuestionType,
	SpacailNumber: SpecialNumberType,
	format: FormatType
) => {
	switch (GameName) {
		case 'Arithmetic': {
			return ArithmeticQuetions(StudentGrade, Operation, NumberOfQuestions, SpacailNumber);
		}
		case 'MissingNumber': {
			return MissingNumberQuetions(
				StudentGrade,
				Operation !== '/' && Operation !== '*' && Operation !== '**' ? Operation : 'Mixed',
				NumberOfQuestions,
				format
			);
		}
		case 'FindTheNumber': {
			return GenerateNumbers(NumberOfQuestions);
		}
		case 'Fractions': {
			return GenerateFractionsQuestions(StudentGrade, Operation, NumberOfQuestions);
		}
		case 'Exponents': {
			return GenerateExponentsQuestions(StudentGrade, Operation, NumberOfQuestions);
		}
		default: {
			return ArithmeticQuetions(StudentGrade, Operation, NumberOfQuestions, SpacailNumber);
		}
	}
};

export default GrenereteQuestions;
