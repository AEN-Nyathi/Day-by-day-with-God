import RandomNumber from "../../Functions/RandomNumber";


export default function MissingNumberOperandes(StudentGrade: StudentGradeType) {
  let knownNumber: number, IsEquelTo: number;
  switch (StudentGrade) {
    case 'Grade-6': {
      knownNumber = RandomNumber(10) + 10;
      IsEquelTo = RandomNumber(10) + 10;
      break
    }
    case 'Grade-7': {
      knownNumber = RandomNumber(100);
      IsEquelTo = RandomNumber(100);
      break
    }
    default: {
      knownNumber = RandomNumber(10) + 1;
      IsEquelTo = RandomNumber(10) + 1;
    }
  }
  return { knownNumber, IsEquelTo }
}
