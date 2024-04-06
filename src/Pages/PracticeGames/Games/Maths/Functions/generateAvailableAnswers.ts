export default function generateAvailableAnswers(answer: number): number[] {
  const answerChoices = new Set([answer]); // Add correct answer first

  while (answerChoices.size < 10) {
    const Upto = answer > 0 && answer < 100 ? 10 : answer > 100 && answer < 1000 ? 100 : answer > 1000 && answer < 10000 ? 1000 : answer > 10000 && answer < 100000 ? 10000 : 10
    const randomOffset = Math.floor(Math.random() * Upto);
    const randomAnswer1 = answer + randomOffset;
    const randomAnswer2 = answer - randomOffset;

    if (randomAnswer1 >= 0 && answerChoices.size < 10) {
      answerChoices.add(randomAnswer1);
    }
    if (randomAnswer2 >= 0 && answerChoices.size < 10) {
      answerChoices.add(randomAnswer2);
    }
    if (answer <= 0) {
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
