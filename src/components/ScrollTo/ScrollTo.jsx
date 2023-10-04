import "./ScrollTo.css";

export default function ScrollTo() {
	const SCROLL = () => {
		window.scrollTo(0, 0);
	};
	return (
		<input className="input" onClick={SCROLL} type="image" src="/img/arrow.png" alt="up button" />
	);
}
