

export default function MissingNumberAnswers(knownNumber: number, IsEquelTo: number, Operation: OperationType, Format: FormatType, StudentGrade: StudentGradeType) {
  let Answer: number, question: MissingNumberQuestionType['Question']
  switch (Format) {
    case 'Format-A': {
      if (knownNumber > IsEquelTo && Operation === "+" && StudentGrade !== 'Grade-6' && StudentGrade !== 'Grade-7') {
        [knownNumber, IsEquelTo] = [IsEquelTo, knownNumber];
      }
      Answer = Operation == '+' ? IsEquelTo - knownNumber : IsEquelTo + knownNumber
      question = { Operation: Operation, Operand2: knownNumber, IsEquelTo } // (e.g, x + 2 = 5 or x - 2 = 3)
      break
    }
    case 'Format-B': {
      if (knownNumber > IsEquelTo && Operation === "+" && StudentGrade !== 'Grade-6' && StudentGrade !== 'Grade-7') {
        [knownNumber, IsEquelTo] = [IsEquelTo, knownNumber];
      } else if (knownNumber < IsEquelTo && Operation === "-" && StudentGrade !== 'Grade-6' && StudentGrade !== 'Grade-7') {
        [knownNumber, IsEquelTo] = [IsEquelTo, knownNumber];
      }
      Answer = Operation == '+' ? IsEquelTo - knownNumber : knownNumber - IsEquelTo
      question = { Operand1: knownNumber, Operation: Operation, IsEquelTo } // (e.g, 3 + x = 5 or 5 - x = 2)
      break
    }
    default: {
      Answer = Operation == '+' ? IsEquelTo - knownNumber : IsEquelTo + knownNumber
      question = { Operation: Operation, Operand2: knownNumber, IsEquelTo } // (e.g, x + 2 = 5 or x - 2 = 3)
    }
  }
  return { Answer, question }
}
