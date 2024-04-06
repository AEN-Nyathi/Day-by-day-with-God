export default function FractionsAnswers(fractionA: FractionType, fractionB: FractionType, Operation: OperationType) {
  let Answer: FractionType

  switch (Operation) {
    case '+': {
      if (fractionA.Denominator == fractionB.Denominator) {
        Answer = { Numerator: fractionA.Numerator + fractionB.Numerator, Denominator: fractionA.Denominator || fractionB.Denominator }
        break
      } else if (fractionB.Denominator % fractionA.Denominator == 0 || fractionA.Denominator % fractionB.Denominator == 0) {
        const Denominator = fractionB.Denominator > fractionA.Denominator ? fractionB.Denominator : fractionA.Denominator
        const NumeratorA = fractionA.Numerator * (Denominator / fractionA.Denominator)
        const NumeratorB = fractionB.Numerator * (Denominator / fractionB.Denominator)
        Answer = { Numerator: NumeratorA + NumeratorB, Denominator: Denominator }
        break
      } else {
        const Denominator = fractionB.Denominator * fractionA.Denominator
        const NumeratorA = fractionA.Numerator * (Denominator / fractionA.Denominator)
        const NumeratorB = fractionB.Numerator * (Denominator / fractionB.Denominator)
        Answer = { Numerator: NumeratorA + NumeratorB, Denominator: Denominator }
        break
      }

    } case '*': {
      Answer = { Numerator: fractionA.Numerator * fractionB.Numerator, Denominator: fractionA.Denominator * fractionB.Denominator }
      break
    } case '/': {
      Answer = { Numerator: fractionA.Numerator * fractionB.Denominator, Denominator: fractionA.Denominator * fractionB.Numerator }
      break
    } case '-': {
      if (fractionA.Numerator < fractionB.Numerator) [fractionA.Numerator, fractionB.Numerator] = [fractionB.Numerator, fractionA.Numerator];

      if (fractionA.Denominator == fractionB.Denominator) {
        Answer = { Numerator: fractionA.Numerator - fractionB.Numerator, Denominator: fractionA.Denominator }
        break
      } else if (fractionB.Denominator % fractionA.Denominator == 0 || fractionA.Denominator % fractionB.Denominator == 0) {
        const Denominator = fractionB.Denominator > fractionA.Denominator ? fractionB.Denominator : fractionA.Denominator
        Answer = { Numerator: ((Denominator / fractionA.Denominator) * fractionA.Numerator) - ((Denominator / fractionB.Denominator) * fractionB.Numerator), Denominator: Denominator }
        break
      } else {
        const Denominator = fractionB.Denominator * fractionA.Denominator
        Answer = { Numerator: ((Denominator / fractionA.Denominator) * fractionA.Numerator) - ((Denominator / fractionB.Denominator) * fractionB.Numerator), Denominator: Denominator }
        break
      }
    } default: {

      if (fractionA.Denominator == fractionB.Denominator) {
        Answer = { Numerator: fractionA.Numerator - fractionB.Numerator, Denominator: fractionA.Denominator }
        break
      } else if (fractionB.Denominator % fractionA.Denominator == 0 || fractionA.Denominator % fractionB.Denominator == 0) {
        const Denominator = fractionB.Denominator > fractionA.Denominator ? fractionB.Denominator : fractionA.Denominator
        Answer = { Numerator: ((Denominator / fractionA.Denominator) * fractionA.Numerator) - ((Denominator / fractionB.Denominator) * fractionB.Numerator), Denominator: Denominator }
        break
      } else {
        const Denominator = fractionB.Denominator * fractionA.Denominator
        Answer = { Numerator: ((Denominator / fractionA.Denominator) * fractionA.Numerator) - ((Denominator / fractionB.Denominator) * fractionB.Numerator), Denominator: Denominator }
        break
      }
    }
  }
  const properFraction = Answer.Denominator < Answer.Numerator ? true : false
  const Positive = Answer.Numerator > 0 ? true : false
  const Integer = Number.isInteger(Answer.Numerator / Answer.Denominator)
  let hasHCF = false
  if (Answer.Numerator % Answer.Denominator == 0) {
    Answer.Numerator = Answer.Numerator / Answer.Denominator
    Answer.Denominator = 1
    return { Answer, properFraction, Positive, Integer, hasHCF }
  }
  for (let HCF = 100; HCF > 1; HCF--) {
    if (Answer.Denominator % HCF == 0 && Answer.Numerator % HCF == 0) {
      Answer.Denominator = Answer.Denominator / HCF
      Answer.Numerator = Answer.Numerator / HCF
      hasHCF = true
      return { Answer, properFraction, Positive, Integer, hasHCF }
    }
  }
  return { Answer, properFraction, Positive, Integer, hasHCF }
}

 