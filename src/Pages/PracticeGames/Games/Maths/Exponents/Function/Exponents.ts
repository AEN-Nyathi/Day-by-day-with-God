import RandomNumber from "../../Functions/RandomNumber";

export default function Exponents(StudentGrade: StudentGradeType,): {
  PowerA: PowerType;
  PowerB: PowerType;
} {
  const BaseB = RandomNumber(8, 2)
  let BaseA = RandomNumber(9, 1);
  const ExponentA = RandomNumber(10, 1)
  const ExponentB = RandomNumber(10, 1)


  switch (StudentGrade) {
    case 'Grade-5': {
      BaseA = BaseB
      break
    }
  }

  return {
    PowerA: {
      Exponent: ExponentA,
      Base: BaseA
    },
    PowerB: {
      Exponent: ExponentB,
      Base: BaseB
    }
  }
}