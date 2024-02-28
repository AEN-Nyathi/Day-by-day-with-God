import grade1PossibleDifferences from "./Difference/Grade1PossibleDifferences";
import grade1PossibleSums from "./sum/Grade1PossibleSums";
import grade2PossibleDifferences from "./Difference/Grade2PossibleDifferences";
import grade2PossibleSums from "./sum/Grade2PossibleSums";
import grade3PossibleDifferences from "./Difference/Grade3PossibleDifferences";
import Grade3PossibleSums from "./sum/Grade3PossibleSums";

const GrenereteQuetions = (
    grade: string | undefined,
    sign: '-' | '+',
    NumbeOfQuesstions:number
) => {
    switch (grade) {
        case 'grade1':
            return sign === '-'
                ? grade1PossibleDifferences(NumbeOfQuesstions)
                : grade1PossibleSums(NumbeOfQuesstions);
        case 'grade2':
            return sign === '-'
                ? grade2PossibleDifferences(NumbeOfQuesstions)
                : grade2PossibleSums(NumbeOfQuesstions);
        case 'grade3':
            return sign === '-'
                ? grade3PossibleDifferences(NumbeOfQuesstions)
                : Grade3PossibleSums(NumbeOfQuesstions);
        default:
            return sign === '-'
                ? grade1PossibleDifferences(NumbeOfQuesstions)
                : grade1PossibleSums(NumbeOfQuesstions);
    }
};
export default GrenereteQuetions