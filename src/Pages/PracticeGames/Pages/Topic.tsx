import { useNavigate } from 'react-router-dom';
import PracticeGamesData from '../Context/PracticeGamesData';

export default function Topic() {
	const { Games, GamesNames, SubjectsNames } = new PracticeGamesData().getGames();
	SubjectsNames.length;
	// console.log(WholeNumbers);
	const Display = SubjectsNames.map((subjectsNames) => {
		return {
			Subjects: subjectsNames,
			Games: GamesNames.map((game) => {
				return {
					Name: game,
					Games: Games.filter((Game) => Game.name == game),
				};
			}),
		};
	});
	console.log(Display);
const Navigation = useNavigate();
	return (
		<main>
			{Display.map((subjectsNames) => {
				return (
					<section className='bg-primary/5' key={subjectsNames.Subjects}>
						<h2>{subjectsNames.Subjects}</h2>
						{subjectsNames.Games.sort((a, b) => b.Games.length - a.Games.length).map((Topic) => {
							return (
								<article key={Topic.Name}>
									<h2 className='p-2 bg-slate-500/50'>{Topic.Name}</h2>
									<nav className='flex flex-wrap gap-2 mt-2'>
										{Topic.Games.filter((Game) => Game.name == Topic.Name).map((game) => {
											return (
												<button
													onClick={() => Navigation(game.link)}
													key={game.link}>
												{game.id}
												</button>
											);
										})}
									</nav>
								</article>
							);
						})}
					</section>
				);
			})}
		</main>
	);
}
