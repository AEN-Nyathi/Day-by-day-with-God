// import { useStateValue } from "../../Functions/Utils";
import Links from "./Links"
import Profile from "./Profile"
import logo from "../../assets/logo.png"

function Desktop() {
	
	return (
		<div className="hidden md:flex justify-around w-screen py-2">
			<img alt="logo" src={logo} width={50} height={50} />
			<Links />
			<Profile />
		</div>
	);
}

export default Desktop