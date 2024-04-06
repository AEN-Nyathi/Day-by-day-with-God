import Math from '@Images/logo.png';

class PracticeGamesData {
	private Grades: GradeType[] = [
		{
			Grade: 'Grade-1',
			description: 'StudentGrade 1',
			subjects: [
				{
					name: 'Maths',
					description: 'Develop critical thinking and problem-solving skills...',
					image: Math,
					games: [
						{
							id: 'Grade-1',
							name: 'Calculation of Whole Numbers',
							description: 'Test your knowledge of Addiction upto 10',
							link: '/Game/Maths/Arithmetic/Grade-1',
						},
						{
							id: 'Grade-1',
							name: 'Find the Number ',
							description: 'Test your knowledge of identifiying numbers upto 10',
							link: '/Game/Maths/FindNumber/Grade-1',
						},
						{
							id: 'Grade-1',
							name: 'Place Numbers In Order ',
							description: 'Test your knowledge of counting numbers upto 10',
							link: '/Game/Maths/PlaceNumbersInOrder/Grade-1',
						},
					],
				},
			],
		},
		{
			Grade: 'Grade-2',
			description: 'StudentGrade 2',
			subjects: [
				{
					name: 'Maths',
					description: 'Develop critical thinking and problem-solving skills...',
					image: Math,
					games: [
						{
							id: 'Grade-2',
							link: '/Game/Maths/Arithmetic/Grade-2',
							name: 'Calculation of Whole Numbers',
							description: 'Test your knowledge of key math Sum And Diffirence upto 20',
						},
					],
				},
			],
		},
		{
			Grade: 'Grade-3',
			description: 'StudentGrade 3',
			subjects: [
				{
					name: 'Maths',
					description: 'Develop critical thinking and problem-solving skills...',
					image: Math,
					games: [
						{
							id: 'Grade-3',
							link: '/Game/Maths/Arithmetic/Grade-3',
							name: 'Calculation of Whole Numbers',
							description:
								'Test your knowledge of Addiction, Substretion and Multiplication upto 100',
						},
						{
							id: 'Grade-3',
							link: '/Game/Maths/Fraction/Grade-3',
							name: 'Calculation of Fractions',
							description:
								'Test your knowledge of Adding and Substreting Fraction with common denominator',
						},
						{
							id: 'Grade-3',
							name: 'Find the Missing Number',
							description: 'Test your knowledge of identifiying numbers upto 10',
							link: '/Game/Maths/MissingNumber/Grade-3',
						},
					],
				},
			],
		},
		{
			Grade: 'Grade-4',
			description: 'StudentGrade 4',
			subjects: [
				{
					name: 'Maths',
					description: 'Develop critical thinking and problem-solving skills...',
					image: Math,
					games: [
						{
							id: 'Grade-4',
							link: '/Game/Maths/Arithmetic/Grade-4',
							name: 'Calculation of Whole Numbers',
							description: 'Test your knowledge of Adding and Substreting Whole Numbers',
						},
						{
							id: 'Grade-4',
							link: '/Game/Maths/Fraction/Grade-4',
							name: 'Calculation of Fractions',
							description:
								'Test your knowledge of Adding and Substreting Fraction with common denominator and conveting to its Equivalent Fraction',
						},
						{
							id: 'Grade-4',
							name: 'Find the Missing Number',
							description: 'Test your knowledge of identifiying numbers upto 10',
							link: '/Game/Maths/MissingNumber/Grade-4',
						},
						{
							id: 'Grade-4',
							name: 'Find the Place Values',
							description: 'Test your knowledge of PlaceValues upto 1 000',
							link: '/Game/Maths/PlaceValues/Grade-4',
						},
					],
				},
			],
		},
		{
			Grade: 'Grade-5',
			description: 'StudentGrade 5',
			subjects: [
				{
					name: 'Maths',
					description: 'Develop critical thinking and problem-solving skills...',
					image: Math,
					games: [
						{
							id: 'Grade-5',
							link: '/Game/Maths/Arithmetic/Grade-5',
							name: 'Calculation of Whole Numbers',
							description:
								'Test your knowledge of Addiction and Substretion upto 10 000 and Multiplication And Diviction upto 1 000',
						},
						{
							id: 'Grade-5',
							link: '/Game/Maths/Fraction/Grade-5',
							name: 'Calculation of Fractions',
							description:
								'Test your knowledge of Addiction, Substretion And Multiplication of Fraction',
						},
						{
							id: 'Grade-5',
							link: '/Game/Maths/Exponents/Grade-5',
							name: 'Calculation of Exponents',
							description:
								'Test your knowledge of Addiction, Substretion And Multiplication of Exponents',
						},
						{
							id: 'Grade-5',
							name: 'Find the Missing Number',
							description: 'Test your knowledge of identifiying numbers upto 10',
							link: '/Game/Maths/MissingNumber/Grade-5',
						},
					],
				},
			],
		},
		{
			Grade: 'Grade-6',
			description: 'Student Grade 6',
			subjects: [
				{
					name: 'Maths',
					description: 'Develop critical thinking and problem-solving skills...',
					image: Math,
					games: [
						{
							id: 'Grade-6',
							link: '/Game/Maths/Arithmetic/Grade-6',
							name: 'Calculation of Whole Numbers',
							description:
								'Test your knowledge of Addiction, Substretion, Multiplication And Diviction upto 10 000',
						},
						{
							id: 'Grade-6',
							link: '/Game/Maths/Fraction/Grade-6',
							name: 'Calculation of Fractions',
							description:
								'Test your knowledge of Addiction, Substretion And Multiplication of Fraction',
						},
						{
							id: 'Grade-6',
							link: '/Game/Maths/Exponents/Grade-6',
							name: 'Calculation of Exponents',
							description:
								'Test your knowledge of Addiction, Substretion And Multiplication of Exponents',
						},
						{
							id: 'Grade-6',
							name: 'Find the Missing Number',
							description: 'Test your knowledge of identifiying numbers upto 40',
							link: '/Game/Maths/MissingNumber/Grade-6',
						},
					],
				},
			],
		},
		{
			Grade: 'Grade-7',
			description: 'Student Grade 7',
			subjects: [
				{
					name: 'Maths',
					description: 'Develop critical thinking and problem-solving skills...',
					image: Math,
					games: [
						{
							id: 'Grade-7',
							link: '/Game/Maths/Arithmetic/Grade-7',
							name: 'Calculation of Whole Numbers',
							description:
								'Test your knowledge of Addiction, Substretion, Multiplication And Diviction upto 1 000 000',
						},
						{
							id: 'Grade-7',
							link: '/Game/Maths/Fraction/Grade-7',
							name: 'Calculation of Fractions',
							description:
								'Test your knowledge of Addiction, Substretion And Multiplication of Fraction',
						},
						{
							id: 'Grade-7',
							name: 'Find the Missing Number',
							description: 'Test your knowledge of identifiying numbers upto 10',
							link: '/Game/Maths/MissingNumber/Grade-7',
						},
						{
							id: 'Grade-7',
							link: '/Game/Maths/Exponents/Grade-7',
							name: 'Calculation of Exponents',
							description:
								'Test your knowledge of Addiction, Substretion And Multiplication of Exponents',
						},
					],
				},
			],
		},
		{
			Grade: 'Grade-8',
			description: 'Student Grade 7',
			subjects: [
				{
					name: 'Maths',
					description: 'Develop critical thinking and problem-solving skills...',
					image: Math,
					games: [
						{
							id: 'Grade-8',
							name: 'Find the Missing Number',
							description: 'Test your knowledge of identifiying numbers upto 10',
							link: '/Game/Maths/MissingNumber/Grade-8',
						},
						{
							id: 'Grade-8',
							link: '/Game/Maths/Fraction/Grade-8',
							name: 'Calculation of Fractions',
							description:
								'Test your knowledge of Addiction, Substretion And Multiplication of Fraction',
						},
						{
							id: 'Grade-8',
							link: '/Game/Maths/Exponents/Grade-8',
							name: 'Calculation of Exponents',
							description:
								'Test your knowledge of Addiction, Substretion And Multiplication of Exponents',
						},
					],
				},
			],
		},
	];
	public getGrades(): GradeType[] {
		return this.Grades; // Assuming 'Maths' is always at index 0
	}
	public getGames() {
		const Subjects: SubjectType[] = [];
		const Games: GameType[] = [];
		const SubjectsNames: Set<SubjectType['name']> = new Set();
		const GamesNames: Set<GameType['name']> = new Set();
		this.Grades.forEach((Grade) =>
			Grade.subjects.forEach((subject) => {
				Subjects.push(subject);
			})
		);
		Subjects.forEach((subject) => {
			SubjectsNames.add(subject.name);
			subject.games.forEach((game) => {
				Games.push(game);
			});
		});
		Games.forEach((game) => {
			GamesNames.add(game.name);
		});

		return {
			Subjects,
			Games,
			SubjectsNames: Array.from(SubjectsNames),
			GamesNames: Array.from(GamesNames),
		};
	}
}

export default PracticeGamesData;
