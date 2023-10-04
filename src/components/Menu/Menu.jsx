import { Link } from "react-router-dom";

const MENU = () => {
	return (
		<nav className="menu">
			<Link to={"/"}>Home</Link>
			<Link to={"/services"}>Services</Link>
			<Link to={"/projects"}>Projects</Link>
			<Link to={"/blog"}>Blog</Link>
			<Link to={"/contact"}>Contact</Link>
		</nav>
	);
};

export default MENU;
