import { MdGrade, MdTopic } from 'react-icons/md';
import { Outlet, useNavigate } from 'react-router-dom';
const PracticeGames: React.FC = () => {
	const Navigation = useNavigate();
	

	return (
		<main>
			<article className='grid mt-0 grid-cols-2 gap-2 bg-blue-50 dark:bg-blue-950 fixed top-12 md:top-14 rounded-none border-none z-50 w-screen '>
				<button onClick={() => Navigation('/PracticeGames/Topics')}>
					<MdTopic className='mr-2' /> Topics
				</button>
				<button onClick={() => Navigation('/PracticeGames/Grades')}>
					<MdGrade className='mr-2' /> Grade
				</button>
			</article>
		
			<Outlet />
		</main>
	);
};

export default PracticeGames;
