import { Outlet } from "react-router-dom";
import ScrollTo from "../components/ScrollTo/ScrollTo";

const ROOT_LAYOUT = () => {
	return (
		<>
			<div className="container">
				<Outlet />
			</div>
			<ScrollTo />
		</>
	);
};

export default ROOT_LAYOUT;