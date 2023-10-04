const FEATURE = ({ color, img, title }) => {
	return (
		<article className={`section-col section-col-${color}`}>
			<img src={`img/${img}`} alt="" />
			<h3 className="section-col-title">{title}</h3>
		</article>
	);
};

export default FEATURE;
