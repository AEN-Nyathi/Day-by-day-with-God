import RandomNumber from "../../Functions/RandomNumber";
import GenereteAnswer from "./FractionsAnswers";
import Fractions from "./FractionOperandes";
import generateAvailableAnswers from "./generateAvailableAnswers";

export default function FractionQuestions(
    StudentGrade: StudentGradeType, Operation: OperationType, NumberOfQuestions: NumberOfQuestionType
): FractionsQuestionType[] {

    const Questions = new Set<FractionsQuestionType>();

    while (Questions.size < NumberOfQuestions) {
        const Operations: OperationType[] = ['+', '-', '*', '/']
        Operation = Operation == 'Mixed' ? Operations[RandomNumber(StudentGrade == 'Grade-3' ? 2 : StudentGrade == 'Grade-4' ? 2 : StudentGrade == 'Grade-5' ? 3 : 4)] : Operation

        const { fractionA, fractionB } = Fractions(StudentGrade, Operation)
        const { Answer, Integer, Positive, hasHCF, properFraction } = GenereteAnswer(fractionA, fractionB, Operation)

        const AddQuestion = () => Questions.add({
            type: 'Fractions',
            Operation: Operation,
            Question: { Operand1: { Denominator: fractionA.Denominator, Numerator: fractionA.Numerator }, Operation: Operation, Operand2: { Denominator: fractionB.Denominator, Numerator: fractionB.Numerator } },
            Answer: Answer,
            AvailableAnswers: generateAvailableAnswers(Answer)
        });

        switch (StudentGrade) {
            case 'Grade-3': {
                if (!properFraction && Positive && !Integer && !hasHCF) {
                    AddQuestion()
                }
                break
            }
            case 'Grade-4': {
                if (Positive && hasHCF && !properFraction) {
                    AddQuestion()
                } else if (Positive && Integer && properFraction) {
                    AddQuestion()
                }
                break
            }
            case 'Grade-5': {
                if (!properFraction && Positive && !Integer && !hasHCF) {
                    AddQuestion()
                }
                break
            }
            case 'Grade-6': {
                if (Positive && hasHCF && !properFraction) {
                    AddQuestion()
                } else if (Positive && Integer) {
                    AddQuestion()
                }
                break
            }
            case 'Grade-7': {
                if (!properFraction && Positive) {
                    AddQuestion()
                }
                break
            }
            default: {
                AddQuestion()
            }
        }

    }
    return Array.from(Questions);
}
