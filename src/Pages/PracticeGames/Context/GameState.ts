import GrenereteQuetions from "../Games/Maths/Arithmetic/Function/ArithmeticGradeBasedQuestions";
import PracticeGamesData from "./PracticeGamesData";

class GamesState {
	Grades: GradeType[];
	GameOver: boolean;
	ShuffleAnswers: boolean;
	SortByAnswers: boolean;
	TimeLeft: number;
	QuestionTime: number;
	Operation: OperationType;
	Score: number;
	Clue: number;
	Questions: ArithmeticQuestionType[] | MissingNumberQuestionType[] | FractionsQuestionType[] | ExponentsQuestionType[]
	CurrentQuestion: number;
	NumberOfQuestion: NumberOfQuestionType;
	StudentGrade: StudentGradeType;
	GameName: GameNamesTypes;
	SpacailNumber: SpecialNumberType;
	Format: FormatType
	constructor(
	) {
		this.SpacailNumber = 0
		this.Operation = 'Mixed'
		this.Format = 'Format-B'
		this.StudentGrade = 'Grade-1'
		this.GameName = 'Arithmetic'
		this.NumberOfQuestion = 5
		this.Questions = GrenereteQuetions(
			this.StudentGrade,
			this.Operation,
			this.NumberOfQuestion,
			this.SpacailNumber
		),
			this.ShuffleAnswers = false
		this.SortByAnswers = false
		this.CurrentQuestion = 0
		this.Clue = 0
		this.Score = 0
		this.QuestionTime = 100
		this.TimeLeft = this.QuestionTime
		this.GameOver = false
		this.Grades = new PracticeGamesData().getGrades();
	}
}

export default GamesState;
