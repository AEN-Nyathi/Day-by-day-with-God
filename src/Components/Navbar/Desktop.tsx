// import { useStateValue } from "../../Functions/Utils";
import Links from "./Links"
import Profile from "./Profile"

function Desktop() {
    // const { state, dispatch } = useStateValue();
    // console.log(state)
  return (
		<div className="hidden md:flex justify-around w-screen py-2">
			<h1>Presh</h1>
			<Links />
			<Profile />
		</div>
	);
}

export default Desktop