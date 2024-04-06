export default function generateAvailableAnswers(answer: FractionType): FractionType[] {

  // answer = { Denominator: 1, Numerator: 2 }

  const answerChoices = new Set([answer]); // Add correct answer first

  while (answerChoices.size < 10) {
    const Upto = 10
    const randomOffset = Math.floor(Math.random() * Upto);

    const randomAnswer1: FractionType = { Numerator: answer.Numerator + randomOffset, Denominator: answer.Denominator };
    const randomAnswer2: FractionType = { Numerator: answer.Numerator - randomOffset, Denominator: answer.Denominator };

    if (randomAnswer1.Numerator > 0 && answerChoices.size < 10) {
      answerChoices.add(randomAnswer1);
    }
    if (randomAnswer2.Numerator > 0 && answerChoices.size < 10) {
      answerChoices.add(randomAnswer2);
    }
    if (answer.Numerator < 0) {
      if (answerChoices.size < 10) {
        answerChoices.add(randomAnswer1);
      }
      if (answerChoices.size < 10) {
        answerChoices.add(randomAnswer2);
      }
    }

  }

  return Array.from(answerChoices).sort(() => Math.random() - 0.5);
}
