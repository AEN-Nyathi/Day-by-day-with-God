import Math from '@Images/logo.png';
interface Game {
	id: string;
	name: string;
	description?: string;
	link: string;
	// Add any other game-specific properties needed
}

interface Subject {
	name: string;
	description: string;
	image: string; // URL for subject image
	games: Game[];
}

interface GradeType {
	Grade: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	description: string;
	subjects: Subject[];
}
class PracticeGamesData {
	private Grades: GradeType[] = [
		{
			Grade: 1,
			description: 'grade 1',
			subjects: [
				{
					name: 'Maths',
					description:
						'Develop critical thinking and problem-solving skills...',
					image: Math,
					games: [
						{
							id: 'SumAndDiffirence',
							name: 'Sum And Diffirence upto 10',
							description:
								'Test your knowledge of key math Sum And Diffirence upto 10',
							link: '/sum-difference/grade1',
						},
						{
							id: 'FindNumberGrade1',
							name: 'Find the Number upto 10',
							description: 'Test your knowledge of identifiying numbers',
							link: '/games/Grade1/FindNumberGrade1',
						},
						{
							id: 'PlaceNumbersInOrderGrade1',
							name: 'Place Numbers In Order upto 10',
							description: 'Test your knowledge of counting numbers',
							link: '/games/Grade1/PlaceNumbersInOrderGrade1',
						},
					],
				},
			],
		},
		{
			Grade: 2,
			description: 'grade 2',
			subjects: [
				{
					name: 'Maths',
					description:
						'Develop critical thinking and problem-solving skills...',
					image: Math,
					games: [
						{
							id: 'SumAndDiffirence',
							link: '/sum-difference/grade2',
							name: 'Sum And Diffirence upto 20',
							description:
								'Test your knowledge of key math Sum And Diffirence upto 20',
						},
					],
				},
			],
		},
		{
			Grade: 3,
			description: 'grade 3',
			subjects: [
				{
					name: 'Maths',
					description:
						'Develop critical thinking and problem-solving skills...',
					image: Math,
					games: [
						{
							id: 'SumAndDiffirence',
							link: '/sum-difference/grade3',
							name: 'Sum And Diffirence upto 100',
							description:
								'Test your knowledge of key math Sum And Diffirence upto 100',
						},
						// {
						// 	link: '/games/BingoBonanza',
						// 	id: 'BingoBonanza',
						// 	name: 'Bingo Bonanza',
						// 	description: 'Practice addition, subtraction...',
						// },
					],
				},
			],
		},
	];
	public getGrades(): GradeType[] {
		return this.Grades; // Assuming 'Maths' is always at index 0
	}
}

export default PracticeGamesData;
