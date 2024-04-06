

function GenereteAnswer(PowerA: PowerType, PowerB: PowerType, Operation: OperationType) {
  let Answer: number

  switch (Operation) {
    case '+': {
      return Answer = (PowerA.Base ** PowerA.Exponent) + (PowerB.Base ** PowerB.Exponent)
    }
    case '-': {
      return Answer = (PowerA.Base ** PowerA.Exponent) - (PowerB.Base ** PowerB.Exponent)
    }
    case '*': {
      return Answer = (PowerA.Base ** PowerA.Exponent) * (PowerB.Base ** PowerB.Exponent)
    }
    case '/': {
      return Answer = (PowerA.Base ** PowerA.Exponent) / (PowerB.Base ** PowerB.Exponent)
    }
    default: {
      return Answer = (PowerA.Base ** PowerA.Exponent) - (PowerB.Base ** PowerB.Exponent)
    }
  }
  return Answer
}

export default GenereteAnswer