import { useGameStore } from "@Backend/hooks/useStore";
import { TiArrowShuffle } from "react-icons/ti";


const ShuffleAnswersButton = () => {
  const {ShuffleAnswers, dispatch } = useGameStore();
  return (
		<button
			className={` flex ${ShuffleAnswers ? 'bg-blue-500 border-4' : 'bg-red-500'}`}
			onClick={() => {
				dispatch({ type: 'ShuffleAnswers' });
			}}>
			<TiArrowShuffle />
		</button>
	);
}

export default ShuffleAnswersButton