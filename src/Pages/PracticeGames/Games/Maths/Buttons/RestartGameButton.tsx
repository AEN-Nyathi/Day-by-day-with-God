import { useGameStore } from "@Backend/hooks/useStore";
import { MdRestartAlt } from "react-icons/md";


const RestartGameButton = () => {
  const { dispatch } = useGameStore();
  return (
		<button
			className='bg-red-500/50 border-red-500'
			onClick={() => dispatch({ type: 'RestartGame' })}>
			<MdRestartAlt /> Restart
		</button>
	);
}

export default RestartGameButton