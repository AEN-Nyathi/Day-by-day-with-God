import FractionQuestions from "./FractionQuestions";

export interface gradeQuectionProps {
    NumberOfQuestions: NumberOfQuestionType;
    Operation: OperationType
}

const FractionsGradeBasedQuestions: (StudentGrade: StudentGradeType, Operation: OperationType, NumberOfQuestions: NumberOfQuestionType) => FractionsQuestionType[] = (
    StudentGrade,
    Operation,
    NumberOfQuestions, 
) => {
    if (NumberOfQuestions < 1 || !Number.isInteger(NumberOfQuestions)) {
        throw new Error("Invalid number of questions: must be a positive integer.");
    }

    switch (StudentGrade) {
        case 'Grade-3': 
            return FractionQuestions(StudentGrade, Operation !== '/' && Operation !== '*' ? Operation : 'Mixed', NumberOfQuestions)
        case 'Grade-4':
            return FractionQuestions(StudentGrade, Operation !== '/' && Operation !== '*' ? Operation: 'Mixed', NumberOfQuestions)
        case 'Grade-5':
            return FractionQuestions(StudentGrade, Operation !== '/' ? Operation : 'Mixed', NumberOfQuestions)
        default: {
            return FractionQuestions(StudentGrade, Operation, NumberOfQuestions)
        }
    }
};
export default FractionsGradeBasedQuestions