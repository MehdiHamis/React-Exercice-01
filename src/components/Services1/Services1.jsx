const SERVICES1 = ({ img, title }) => {
	return (
		<article class="article-service">
			<img src={`/img/${img}`} alt="" />
			<h3 class="article-service-title">{title}</h3>
		</article>
	);
};

export default SERVICES1;
