import MissingNumber from "./MissingNumberQuestions";

const MissingNumberGradeBasedQuestions: (StudentGrade: StudentGradeType, Operation: "+" | "-" | 'Mixed', NumberOfQuestions: NumberOfQuestionType, format: FormatType) => MissingNumberQuestionType[] = (
    StudentGrade,
    Operation,
    NumberOfQuestions,
    format
) => {
    // Ensure NumberOfQuestions is valid
    if (NumberOfQuestions <= 0 || !Number.isInteger(NumberOfQuestions)) {
        throw new Error('Invalid number of Questions: must be a positive integer.');
    }
    switch (StudentGrade) {
        case 'Grade-3': {
            return MissingNumber(StudentGrade, NumberOfQuestions, '+', 'Format-B')
        }
        case 'Grade-4': {
            return MissingNumber(StudentGrade, NumberOfQuestions, Operation, Operation == '+' ? 'Format-A' : 'Format-B')
        }
        default: {
            return MissingNumber(StudentGrade, NumberOfQuestions, Operation, format)
        }
    }
};
export default MissingNumberGradeBasedQuestions