import React from 'react';
import SubjectCard from './GradeCard'; // Assuming SubjectCard component is in a separate file
import PracticeGamesData from './PracticeGamesData';

const PracticeGames: React.FC = () => {
    const Grades = new PracticeGamesData().getGrades();

	return (
		<main>
			<h1>Practice Games</h1>
			<section className=" ">
				{Grades.map((Grade) => (
					<SubjectCard key={Grade.Grade} Grade={Grade} />
				))}
			</section>
		</main>
	);
};

export default PracticeGames;
