interface Question {
    question: string;
    answer: number;
    sign: "-";
    variable: { a: number, b: number }
    AvelableAnswers: number[];
}

export default function grade3PossibleDifferences(numberOfQuestions: number): Question[] {
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
            num1 = Math.floor(Math.random() * 100); // Generate numbers from 0 to 10
            num2 = Math.floor(Math.random() * 100);

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
            question: `${num1} - ${num2} = `,
            variable: { a: num1, b: num2 },
            answer: difference,
            AvelableAnswers: [difference - Math.floor(Math.random() * 10), difference - 10, difference - 5, difference - 1, difference, difference + 1, difference + 5, difference + 10, difference + Math.floor(Math.random() * 10)].sort(() => Math.random() - 0.5)

        });
    }


    return questions;
}
