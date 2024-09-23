import React from 'react';
import GameState from './GameState';
export { };

declare global {
	type FormatType = 'Format-A' | 'Format-B' | 'Both'
	type NumberOfQuestionType = 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55;
	type OperationType = "+" | "-" | '*' | '/' | '**' | 'Mixed'
	type SpecialNumberType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 100 | 1000
	type GameNamesTypes = 'Arithmetic' | 'FindTheNumber' | 'MissingNumber' | 'PlaceValues' | 'Fractions' | 'Exponents'
	type StudentGradeType = 'Grade-1' | 'Grade-2' | 'Grade-3' | 'Grade-4' | 'Grade-5' | 'Grade-6' | 'Grade-7' | 'Grade-8' | 'Grade-9' | 'Grade-10' | 'Grade-11' | 'Grade-12' | undefined;

	interface GameType {
		id: string;
		name: string;
		description?: string;
		link: string;
	}



	interface SubjectType {
		name: string;
		description: string;
		image: string;
		games: Game[];
	}

	interface GradeType {
		Grade: StudentGradeType;
		description: string;
		subjects: SubjectType[];
	}

	interface ArithmeticQuestionType {
		ID: string[number]
		type: 'Arithmetic'
		Operation: OperationType;
		Question: { Operand1: number; Operation: OperationType; Operand2: number, IsEquelTo?: number; };
		Answer: number;
		AvailableAnswers: number[];
	}
	interface FindTheNumberQuestionType {
		ID: string[number]
		type: 'FindTheNumber'
		Operation: OperationType;
		Question: number;
		Answer: number;
		AvailableAnswers: number[];
	}
	interface MissingNumberQuestionType {
		type: 'MissingNumber'
		ID: string[number]
		format: FormatType
		Operation: OperationType;
		Question: { Operand1?: number; Operation: OperationType; Operand2?: number, IsEquelTo: number; };
		Answer: number;
		AvailableAnswers: number[];
	}
	interface PlaceValuesQuestionType {
		ID: string[number]
		type: 'PlaceValues'
		Question: number;
		Answer: number;
		AvailableAnswers: number[];
	}
	interface FractionsQuestionType {
		ID: string[number]
		type: 'Fractions'
		Operation: OperationType;
		Question: { Operand1: FractionType; Operation: OperationType; Operand2: FractionType, };
		Answer: FractionType;
		AvailableAnswers: FractionType[];
	}
	interface ExponentsQuestionType {
		ID: string[number]
		type: 'Exponents'
		Operation: OperationType;
		Question: { Operand1: PowerType; Operation: OperationType; Operand2: PowerType, };
		Answer: number;
		AvailableAnswers: number[];
	}
	interface FractionType {
		Numerator: number;
		Denominator: number
	}
	interface PowerType {
		Exponent: number;
		Base: number
	}
	// interface FindTheNumberQuestionType {
	// 	Operation: OperationType;
	// 	Question: string;
	// 	Answer: number;
	// 	AvailableAnswers: number[];
	// 	Variable: { Operand1: number; Operand2: number };
	// }

	type GamesActionTypes = { type: keyof GameState }
		| { type: 'CorrectAnswer' }
		| { type: 'InCorrectAnswer' }
		| { type: 'RestartGame' }
		| { type: 'SortByAnswers' }
		| { type: 'Initialize'; data: GameState }
		| { type: 'Spacail-Number'; data: GameState['SpacailNumber'] }
		| { type: 'Question-Time', data: GameState['QuestionTime'] }
		| { type: 'StartGame', data: { StudentGrade: GameState['StudentGrade'], GameName: GameNamesTypes } }
		| { type: 'Number-Of-Question'; data: GameState['NumberOfQuestion'] }
		| { type: "Set-Operation", data: GameState['Operation'] }
		| { type: "Set-Format", data: GameState['Format'] }

	type GamesStoreType = GameState & {
		dispatch: React.Dispatch<GamesActionTypes>;
	};

}
