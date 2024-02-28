interface Question {
    question: string;
    answer: number;
    AvelableAnswers: number[];
    sign: '-' | '+';
    variable: { a: number, b: number }
}

export default function grade1PossibleDifferences(numberOfQuestions: number): Question[] {
    const questions: Question[] = [];

    // Ensure numberOfQuestions is a valid positive integer
    if (numberOfQuestions <= 0 || !Number.isInteger(numberOfQuestions)) {
        throw new Error(
            'Invalid number of questions: must be a positive integer.'
        );
    }

    // Generate random numbers and create questions
    for (let i = 0; i < numberOfQuestions; i++) {
        let num1: number, num2: number, difference: number;
        do {
            num1 = Math.floor(Math.random() * 11); // Generate numbers from 0 to 10
            num2 = Math.floor(Math.random() * 11);

            // Ensure num1 is always greater than or equal to num2 for subtraction
            if (num1 < num2) {
                [num1, num2] = [num2, num1]; // Swap values if needed
            }

            difference = num1 - num2;
        } while (
            questions.some(
                (q) => q.question === `${num1} - ${num2} = ?` && q.answer === difference
            )
        ); // Ensure questions are unique

        questions.push({
            sign: "-",
            question: `${num1} - ${num2} = ?`,
            variable: { a: num1, b: num2 },
            answer: difference,
            AvelableAnswers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // Filter out correct answer from options
        });
    }


    return questions;
}
