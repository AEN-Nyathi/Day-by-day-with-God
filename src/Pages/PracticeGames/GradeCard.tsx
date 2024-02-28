import { MdSubject } from 'react-icons/md';
import { Link } from 'react-router-dom';

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

const SubjectCard: React.FC<{ Grade: GradeType }> = ({ Grade }) => {
	return (
		<article
			key={Grade.Grade}
			className="bg-light/50 dark:bg-dark/50 rounded-lg shadow-md overflow-hidden">
			<h2>Grade {Grade.Grade}</h2>
			{Grade.subjects.map((subject) => (
				<div>
					<h3>
						<MdSubject /> {subject.name}
					</h3>
					<article>
						<ul className="grid gap-2 ">
							{subject.games.map((game) => (
								<li key={game.id} className="p-4 rounded-lg border-b-2 ">
									<h3>{game.name}</h3>
									<p>{game.description}</p>
									<Link
										to={game.link}
										className="text-blue-500 hover:underline">
										{game.name}
									</Link>
								</li>
							))}
						</ul>
					</article>
				</div>
			))}
		</article>
	);
};

export default SubjectCard;
