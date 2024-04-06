import RandomNumber from "../../Functions/RandomNumber";

export default function FractionOperandes(StudentGrade: StudentGradeType, Operation: OperationType): {
  fractionA: FractionType;
  fractionB: FractionType;
} {
  const DenominatorB = RandomNumber(10, 2)
  const DefaultDenominator = DenominatorB + RandomNumber(10, 1)
  let DenominatorA = Operation == '+' || Operation == '-' ? DefaultDenominator : RandomNumber(10, 1);
  const NumeratorA = RandomNumber(10, 1)
  const NumeratorB = RandomNumber(10, 1)
 

  switch (StudentGrade) {
    case 'Grade-3':
    case 'Grade-4': {
      DenominatorA = Operation == '*' ? DenominatorA : DenominatorB
      break
    }
   
    case 'Grade-5':
    case 'Grade-6': {
      DenominatorA = Operation == '+' || Operation == '-' ? DenominatorB * RandomNumber(10, 1) : DenominatorA
      break
    }
  }

  return {
    fractionA: {
      Numerator: NumeratorA,
      Denominator: DenominatorA
    },
    fractionB: {
      Numerator: NumeratorB,
      Denominator: DenominatorB
    }
  }
}