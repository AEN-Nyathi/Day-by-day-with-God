import Arithmetic from "./ArithmeticQuestions";

export interface gradeQuectionProps {
    NumberOfQuestions: NumberOfQuestionType;
    Operation: OperationType
}

const ArithmeticGradeBasedQuestions: (StudentGrade: StudentGradeType, Operation: OperationType, NumberOfQuestions: NumberOfQuestionType, SpacailNumber: SpecialNumberType) => ArithmeticQuestionType[] = (
    StudentGrade,
    Operation,
    NumberOfQuestions, SpacailNumber
) => {
    if (NumberOfQuestions < 1 || !Number.isInteger(NumberOfQuestions)) {
        throw new Error("Invalid number of questions: must be a positive integer.");
    }

    switch (StudentGrade) {
        case 'Grade-1':
            return Arithmetic(StudentGrade, "+", SpacailNumber, NumberOfQuestions)
        case 'Grade-2':
            return Arithmetic(StudentGrade, Operation !== '/' && Operation !== '*' && Operation !== '**' ? Operation : 'Mixed', SpacailNumber, NumberOfQuestions)
        case 'Grade-3':
            return Arithmetic(StudentGrade, Operation !== '/' && Operation !== '**' ? Operation : 'Mixed', SpacailNumber, NumberOfQuestions)
        default: {
            return Arithmetic(StudentGrade, Operation, SpacailNumber, NumberOfQuestions)
        }
    }
};
export default ArithmeticGradeBasedQuestions