const ARTICLE = ({ title, subtitle, img, button, css }) => {
	return (
		<article
			className="article article-2cols"
			style={{ flexDirection: `${css}` }}
		>
			<div className="article-col">
				<img src={`/public/img/${img}`} alt="" />
			</div>
			<div className="article-col article-col-center">
				<p className="suptitle">{subtitle}</p>
				<h2 className="subtitle">{title}</h2>
				<p className="article-content">
					There are many variations of passages of Lorem Ipsum available but the
					majority have suffered
				</p>
				<a href="#nothing" className="btn">
					{button}
				</a>
			</div>
		</article>
	);
};

export default ARTICLE;
