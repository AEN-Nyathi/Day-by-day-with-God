import { useGameStore } from '@Backend/hooks/useStore';

const Won: React.FC = () => {
	const {
		Score,
		Questions,

		dispatch,
	} = useGameStore();
	return (
		<main>
			<section>
				<article>
					<h1>Congradulation you have complited all Questions</h1>
					<h2 className="my-4">
						wow, you have won {Score} / {Questions.length}
					</h2>
					<h3>{(Score / Questions.length) * 100}%</h3>
					<button
						className="w-full flex"
						onClick={() => {
							dispatch({ type: 'RestartGame' });
						}}>
						Restart
					</button>
				</article>
			</section>
		</main>
	);
};

export default Won;
