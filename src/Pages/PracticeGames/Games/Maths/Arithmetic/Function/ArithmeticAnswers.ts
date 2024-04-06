function ArithmeticAnswers(x: number, y: number, Operation: OperationType, ) {
  let Answer: number
  switch (Operation) {
    case '+': {
      Answer = x + y
      break
    } case '*': {
      Answer = x * y
      break
    } case '**': {
      Answer = x ** y
      break
    } case '/': {
      if (x < y) [x, y] = [y, x];
      Answer = x / y
      break
    } case '-': {
      if (x < y) [x, y] = [y, x];
      Answer = x - y
      break
    }
    default: {
      Answer = x + y
    }
  }
  return  Answer
}

export default ArithmeticAnswers