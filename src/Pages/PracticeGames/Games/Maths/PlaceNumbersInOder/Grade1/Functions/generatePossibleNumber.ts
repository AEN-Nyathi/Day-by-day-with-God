interface Question {
    Question: number;
    options: number[];
}

export default function generatePossibleSums(NumberOfQuestions: NumberOfQuestionType): Question[] {
    const Questions: Question[] = [];
    // let level = 1
    // Ensure NumberOfQuestions is a valid positive integer
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
            Question: number,
            options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // Filter out correct Answer from options
        });
    }


    return Questions;
}