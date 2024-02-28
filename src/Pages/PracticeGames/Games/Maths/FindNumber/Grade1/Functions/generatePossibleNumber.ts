interface Question {
    question: number;
    options: number[];
}

export default function generatePossibleSums(numberOfQuestions: number): Question[] {
    const questions: Question[] = [];
    // let level = 1
    // Ensure numberOfQuestions is a valid positive integer
    if (numberOfQuestions <= 0 || !Number.isInteger(numberOfQuestions)) {
        throw new Error(
            'Invalid number of questions: must be a positive integer.'
        );
    }

    // Generate random numbers and create questions
    for (let i = 0; i < numberOfQuestions; i++) {
        let number: number
        do {
            number = Math.floor(Math.random() * 10) + 1; // Generate random number between 0 and 10
        } while (
            questions.some(
                (q) => q.question === number
            )
        ); // Ensure questions are unique

        questions.push({
            question: number,
            options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // Filter out correct answer from options
        });
    }


    return questions;
}