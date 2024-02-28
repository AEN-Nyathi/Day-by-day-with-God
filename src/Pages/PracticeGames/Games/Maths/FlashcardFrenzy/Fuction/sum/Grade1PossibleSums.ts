interface Question {
    sign: "+";
    question: string;
    answer: number;
    AvelableAnswers: number[];
    variable: { a: number, b: number }
}

export default function grade1PossibleSums(numberOfQuestions: number): Question[] {
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
        let num1: number, num2: number, sum: number;
        do {
            num1 = Math.floor(Math.random() * 10); // Generate random number between 0 and 10
            num2 = Math.floor(Math.random() * 10); // Generate random number between 0 and 10
            sum = num1 + num2;
        } while (
            sum > 10 ||
            questions.some(
                (q) => q.question === `${num1} + ${num2} = ?` && q.answer === sum
            )
        ); // Ensure questions are unique

        questions.push({
            sign: "+",
            variable: { a: num1, b: num2 },
            question: `${num1} + ${num2} = ?`,
            answer: sum,
            AvelableAnswers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // Filter out correct answer from options
        });
    }
 

    return questions;
}