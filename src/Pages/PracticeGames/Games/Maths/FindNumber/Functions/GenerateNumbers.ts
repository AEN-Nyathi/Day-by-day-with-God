


export default function GenerateNumbers(NumberOfQuestions: NumberOfQuestionType): FindTheNumberQuestionType[] {
    const Questions: FindTheNumberQuestionType[] = [];

    if (NumberOfQuestions <= 0 || !Number.isInteger(NumberOfQuestions)) {
        throw new Error(
            'Invalid number of Questions: must be a positive integer.'
        );
    }

    // Generate random numbers and create Questions
    for (let i = 0; i < NumberOfQuestions; i++) {
        let number: number
        do {
            number = Math.floor(Math.random() * 10) + 1; // Generate random number between 0 and 10
        } while (
            Questions.some(
                (q) => q.Question === number
            )
        ); // Ensure Questions are unique

        Questions.push({
            type: "FindTheNumber",
            Operation: '+',
            Answer: number,
            Question: number,
            AvailableAnswers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort(() => Math.random() - 0.5),
        });
    }


    return Questions;
}