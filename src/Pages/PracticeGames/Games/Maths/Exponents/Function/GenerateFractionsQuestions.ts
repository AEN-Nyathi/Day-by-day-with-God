import ExponentsQuestions from "./ExponentQuestions";

export interface gradeQuectionProps {
    NumberOfQuestions: NumberOfQuestionType;
    Operation: OperationType
}

const GenerateExponentsQuestions: (StudentGrade: StudentGradeType, Operation: OperationType, NumberOfQuestions: NumberOfQuestionType) => ExponentsQuestionType[] = (
    StudentGrade,
    Operation,
    NumberOfQuestions, 
) => {
    if (NumberOfQuestions < 1 || !Number.isInteger(NumberOfQuestions)) {
        throw new Error("Invalid number of questions: must be a positive integer.");
    }

    switch (StudentGrade) {
        case 'Grade-5': 
            return ExponentsQuestions(StudentGrade, Operation !== '/' && Operation !== '*' ? Operation : 'Mixed', NumberOfQuestions)
        default: {
            return ExponentsQuestions(StudentGrade, Operation, NumberOfQuestions)
        }
    }
};
export default GenerateExponentsQuestions