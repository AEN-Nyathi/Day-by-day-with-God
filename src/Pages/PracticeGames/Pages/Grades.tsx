import { useNavigate } from 'react-router-dom';
import PracticeGamesData from '../Context/PracticeGamesData';

export default function Grades() {
	const Grades = new PracticeGamesData().getGrades();
	const Navigation = useNavigate();
	return (
		<main >
			{Grades.map((Grade) => (
				<section key={Grade.Grade}>
					<h2>{Grade.Grade}</h2>
					{Grade.subjects.map((subject) => (
						<article>
							<h2 className='p-2 bg-slate-500/50'>{subject.name}</h2>
							<ul className='grid md:grid-cols-4 place-items-start gap-2 mt-2 '>
								{subject.games.map((game) => (
									<li
										onClick={() => Navigation(game.link)}
										key={game.id + Math.random()}
										className='p-4 cursor-pointer h-full grid rounded-lg active:bg-blue-900 border-2 hover:bg-blue-500  bg-blue-500/50'>
										<h2 className='text-orange-500 p-2'> {game.name}</h2>
										<i className='text-wrap'>{game.description}</i>
									</li>
								))}
							</ul>
						</article>
					))}
				</section>
			))}
		</main>
	);
}
