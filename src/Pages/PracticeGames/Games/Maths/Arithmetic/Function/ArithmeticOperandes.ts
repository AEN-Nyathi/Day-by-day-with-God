import RandomNumber from "../../Functions/RandomNumber";

export default function ArithmeticOperandes(StudentGrade: StudentGradeType, Operation: OperationType, SpacailNumber: SpecialNumberType) {
  let x: number, y: number;
  switch (StudentGrade) {
    case 'Grade-1':
    case 'Grade-2': {
      x = RandomNumber(10, 1);
      y = RandomNumber(10, 1);
      break
    }
    case 'Grade-3': {
      if (Operation === "*") {
        x = SpacailNumber ? SpacailNumber : RandomNumber(10)
        y = RandomNumber(10, 1)
      } else {
        x = RandomNumber(100, 10)
        y = RandomNumber(100, 10)
      }
      break
    }
    case 'Grade-4': {
      if (Operation === "*") {
        x = SpacailNumber ? SpacailNumber : RandomNumber(100)
        y = RandomNumber(100, 1)
      } else if (Operation === "/") {
        x = RandomNumber(10, 1)
        y = RandomNumber(10, 1)
      } else {
        x = RandomNumber(1000, 100)
        y = RandomNumber(1000, 100)
      }
      break
    }
    case 'Grade-5': {
      if (Operation === "*") {
        x = SpacailNumber ? SpacailNumber : RandomNumber(100, 10)
        y = RandomNumber(100, 10)
      } else if (Operation === "/") {
        x = RandomNumber(100, 10)
        y = SpacailNumber ? SpacailNumber : RandomNumber(100, 10)
      } else if (Operation === "**") {
        x = RandomNumber(9, 1)
        y = RandomNumber(9, 1)
      } else {
        x = RandomNumber(10000, 1000)
        y = RandomNumber(10000, 1000)
      }
      break
    }
    case 'Grade-6': {
      if (Operation === "*") {
        x = SpacailNumber ? SpacailNumber : RandomNumber(1000, 100)
        y = RandomNumber(1000, 100)
      } else if (Operation === "/") {
        x = RandomNumber(1000, 100)
        y = SpacailNumber ? SpacailNumber : RandomNumber(1000, 100)
      } else {
        x = RandomNumber(100000, 10000)
        y = RandomNumber(100000, 10000)
      }
      break
    }
    case 'Grade-7': {
      if (Operation === "*") {
        x = SpacailNumber ? SpacailNumber : RandomNumber(10000, 1000)
        y = RandomNumber(10000, 1000)
      } else if (Operation === "/") {
        x = RandomNumber(10000, 1000)
        y = SpacailNumber ? SpacailNumber : RandomNumber(10000, 1000)
      } else {
        x = RandomNumber(1000000, 10000)
        y = RandomNumber(1000000, 10000)
      }
      break
    }
    default: {
      x = RandomNumber(1000000);
      y = RandomNumber(1000000);
    }
  }
  return { x, y }
}