import { useStore } from '@Backend/hooks/useStore';
import Links from './Links';
import Profile from './Profile';
import { FiMenu } from 'react-icons/fi';
export default function Mobile() {
	const { dispatch, isMenuOpen } = useStore();

	return (
		<div className="grid grid-cols-4 justify-items-center content-center place-items-center md:hidden gap-2 py-2">
			<FiMenu onClick={() => dispatch({
				data: !isMenuOpen,
				type: "isMenuOpen"
			})} />
			<h1 className="col-span-2 text-xl my-0 py-1">Day by Day with God</h1>
			<Profile />
			{isMenuOpen ? <Links /> : null}
		</div>
	);
}
