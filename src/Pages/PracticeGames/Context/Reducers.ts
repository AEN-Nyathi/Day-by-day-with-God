import GamesState from "./GameState";
import wrongAnswerSound from '@Images/Sound/wrongAnswer.mp3';
import CorrectAnswerSound from '@Images/Sound/correctAnswer.mp3';
import gameOver from '@Images/Sound/gameOver.mp3';
import GrenereteQuestions from "./GrenereteQuestions";

const reducer = (state: GamesState = new GamesState(), action: GamesActionTypes): GamesState => {
	const playSound = (sound: HTMLAudioElement) => {
		sound.currentTime = 0; // Reset sound to beginning before playing
		sound.play();
	};
	const isGameOver = () => {
		return (
			state.Clue + 1 >=
			(state.StudentGrade === 'Grade-1' || state.StudentGrade === 'Grade-2'
				? 3
				: state.StudentGrade === 'Grade-3' || state.StudentGrade === 'Grade-4'
					? 4
					: 4)
		);
	};

	const correctSound = new Audio(CorrectAnswerSound);
	const wrongSound = new Audio(wrongAnswerSound);
	const gameOverSound = new Audio(gameOver);
	switch (action.type) {
		case 'Initialize':
			return new GamesState();
		case 'TimeLeft': {
			return { ...state, TimeLeft: state.TimeLeft - 1 }
		}
		case 'ShuffleAnswers': {
			const Questions = GrenereteQuestions(state.GameName,
				state.StudentGrade, state.Operation, state.NumberOfQuestion, state.SpacailNumber, state.Format
			)
			return {
				...state, ShuffleAnswers: !state.ShuffleAnswers, Clue: 0,
				GameOver: false,
				Score: 0, CurrentQuestion: 0, TimeLeft: state.QuestionTime, Questions
			}
		}
		case 'SortByAnswers': {
			const Questions = !state.SortByAnswers ? GrenereteQuestions(state.GameName,
				state.StudentGrade, state.Operation, state.NumberOfQuestion, state.SpacailNumber, state.Format
			).sort((a, b) => a.Answer - b.Answer) : GrenereteQuestions(state.GameName,
				state.StudentGrade, state.Operation, state.NumberOfQuestion, state.SpacailNumber, state.Format
			).sort(() => Math.random() - 0.5)
			return {
				...state, SortByAnswers: !state.SortByAnswers, Clue: 0, GameOver: false, Score: 0, CurrentQuestion: 0, TimeLeft: state.QuestionTime, Questions
			}
		}
		case 'Clue': {
			return { ...state, Clue: state.Clue + 1 }
		}
		case 'GameOver': {
			playSound(gameOverSound);
			return { ...state, GameOver: true }
		}

		case 'CorrectAnswer': {
			playSound(correctSound);
			return { ...state, TimeLeft: state.QuestionTime, Clue: 0, Score: state.Score + 1, CurrentQuestion: state.CurrentQuestion + 1 }
		}
		case 'InCorrectAnswer': {
			if (isGameOver()) {
				playSound(gameOverSound);
				return { ...state, GameOver: true };
			}
			playSound(wrongSound);
			return { ...state, Clue: state.Clue + 1 }
		}

		case 'Question-Time': {
			const Questions = GrenereteQuestions(state.GameName,
				state.StudentGrade, state.Operation, state.NumberOfQuestion, state.SpacailNumber, state.Format
			)
			return {
				...state, QuestionTime: action.data, Clue: 0, GameOver: false,
				Score: 0, CurrentQuestion: 0, TimeLeft: action.data,
				Questions
			}
		}
		case 'Spacail-Number': {
			const Questions = GrenereteQuestions(state.GameName,
				state.StudentGrade, state.Operation, 10, action.data, state.Format
			).sort((a, b) => a.Answer - b.Answer)
			return {
				...state, SortByAnswers: true, SpacailNumber: action.data, Clue: 0, GameOver: false,
				Score: 0, CurrentQuestion: 0, TimeLeft: state.QuestionTime, NumberOfQuestion: 10,
				Questions
			}
		}
		case 'Number-Of-Question': {
			const Questions = GrenereteQuestions(state.GameName,
				state.StudentGrade, state.Operation, action.data, state.SpacailNumber, state.Format
			)
			return {
				...state, NumberOfQuestion: action.data, Clue: 0, GameOver: false,
				Score: 0, CurrentQuestion: 0, TimeLeft: state.QuestionTime,
				Questions
			}
		}
		case 'RestartGame': {
			const Questions = GrenereteQuestions(state.GameName,
				state.StudentGrade, state.Operation, state.NumberOfQuestion, state.SpacailNumber, state.Format
			)
			return {
				...state, Clue: 0, GameOver: false, Score: 0, CurrentQuestion: 0, TimeLeft: state.QuestionTime, Questions,
			}
		}
		case 'StartGame': {
			const Questions = GrenereteQuestions(action.data.GameName,
				action.data.StudentGrade, state.Operation, state.NumberOfQuestion, state.SpacailNumber, state.Format
			)
			return {
				...state, Clue: 0, GameName: action.data.GameName, GameOver: false, Score: 0, CurrentQuestion: 0, TimeLeft: state.QuestionTime, StudentGrade: action.data.StudentGrade, Questions,
			}
		}
		case 'Set-Operation': {
			const Questions = GrenereteQuestions(state.GameName,
				state.StudentGrade, action.data, state.NumberOfQuestion, state.SpacailNumber, state.Format
			)
			return {
				...state, Clue: 0, Operation: action.data, GameOver: false, Score: 0, CurrentQuestion: 0, TimeLeft: state.QuestionTime, Questions
			}
		}
		case 'Set-Format': {
			const Questions = GrenereteQuestions(state.GameName,
				state.StudentGrade, state.Operation, state.NumberOfQuestion, state.SpacailNumber, action.data
			)
			return {
				...state, Clue: 0, Format: action.data, GameOver: false, Score: 0, CurrentQuestion: 0, TimeLeft: state.QuestionTime, Questions
			}
		}
		default:
			return state;
	}
};

export default reducer;
