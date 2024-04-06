import RandomNumber from "../../Functions/RandomNumber";
import generateAvailableAnswers from "../../Functions/generateAvailableAnswers";
import GenereteAnswer from "./Answer";
import Exponents from "./Exponents";

export default function ExponentsQuestions(
    StudentGrade: StudentGradeType, Operation: OperationType, NumberOfQuestions: NumberOfQuestionType
): ExponentsQuestionType[] {

    const Questions = new Set<ExponentsQuestionType>();

    while (Questions.size < NumberOfQuestions) {
        const Operations: OperationType[] = ['+', '-', '*', '/']
        Operation = Operation == 'Mixed' ? Operations[RandomNumber(StudentGrade == 'Grade-5' ? 2 : StudentGrade == 'Grade-6' ? 3 : 4)] : Operation

        const { PowerA, PowerB } = Exponents(StudentGrade)
        const Answer = GenereteAnswer(PowerA, PowerB, Operation)
        if (Answer < 1000 && Answer > -100 && Number.isInteger(Answer)) {
            Questions.add({
                type: 'Exponents',
                Operation,
                Question: { Operand1: PowerA, Operation, Operand2: PowerB },
                Answer,
                AvailableAnswers: generateAvailableAnswers(Answer)
            });
        }


    }
    return Array.from(Questions);
}
