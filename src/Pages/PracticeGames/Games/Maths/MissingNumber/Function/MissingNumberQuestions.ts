import RandomNumber from "../../Functions/RandomNumber";
import generateAvailableAnswers from "../../Functions/generateAvailableAnswers";
import MissingNumberAnswers from "./MissingNumberAnswers";
import MissingNumberOperandes from "./MissingNumberOperandes";

export default function MissingNumberQuestions(StudentGrade: StudentGradeType, numberOfQuestions: NumberOfQuestionType, Operation: "+" | "-" | 'Mixed', format: FormatType): MissingNumberQuestionType[] {
	const Questions = new Set<MissingNumberQuestionType>();

	// Generate random numbers and create questions
	while (Questions.size < numberOfQuestions) {

		const Operations: OperationType[] = ['+', '-']
		const Formats: FormatType[] = ['Format-A', 'Format-B']
		const operation = Operation == 'Mixed' ? Operations[RandomNumber(2)] : Operation
		const Format = format == 'Both' ? Formats[RandomNumber(2)] : format

		const { IsEquelTo, knownNumber } = MissingNumberOperandes(StudentGrade)
		const { Answer, question } = MissingNumberAnswers(knownNumber, IsEquelTo, Operation, Format, StudentGrade)

		if (Answer >= 0 || StudentGrade == 'Grade-6') {
			Questions.add({
				type: "MissingNumber",
				format: format,
				Operation: operation,
				Question: question,
				Answer: Answer,
				AvailableAnswers: generateAvailableAnswers(Answer), // Answer choices
			});
		}
	}

	return Array.from(Questions);
}
