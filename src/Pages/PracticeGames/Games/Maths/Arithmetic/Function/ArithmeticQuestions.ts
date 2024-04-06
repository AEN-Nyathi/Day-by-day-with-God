import RandomNumber from "../../Functions/RandomNumber";
import generateAvailableAnswers from "../../Functions/generateAvailableAnswers";
import GenereteAnswer from "./ArithmeticAnswers";
import Operandes from "./ArithmeticOperandes";


export default function ArithmeticQuestions(
    StudentGrade: StudentGradeType, Operation: OperationType, SpacailNumber: SpecialNumberType, NumberOfQuestions: NumberOfQuestionType
): ArithmeticQuestionType[] {

    const Questions = new Set<ArithmeticQuestionType>();
    // Generate random numbers and create Questions
    while (Questions.size < NumberOfQuestions) {
        const Operations: OperationType[] = ['+', '-', '*', '/']
        Operation = Operation == 'Mixed' ? Operations[RandomNumber(StudentGrade == 'Grade-2' ? 2 : StudentGrade == 'Grade-3' ? 3 : 4)] : Operation

        const { x, y } = Operandes(StudentGrade, Operation, SpacailNumber)
        const Answer = GenereteAnswer(x, y, Operation)

        const AddQuestion = () => Questions.add({
            type: 'Arithmetic',
            Answer,
            Question: { Operand1: x, Operation, Operand2: y },
            Operation,
            AvailableAnswers: StudentGrade == 'Grade-1' ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] : generateAvailableAnswers(Answer)
        });
        switch (StudentGrade) {
            case 'Grade-1': {
                if (Answer < 10) {
                    AddQuestion()
                }
                break
            }
            default: {
                if (Number.isInteger(Answer) && Operation !== '**') {
                    AddQuestion()
                } else if (Operation === '**' && Answer < 1000) {
                    AddQuestion()
                }
            }
        }
    }

    return Array.from(Questions);
}
