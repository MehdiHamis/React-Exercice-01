import Feature from "../Feature/Feature";
// import Feature01 from "../Feature01/Feature01";
// import Feature02 from "../Feature02/Feature02";
// import Feature03 from "../Feature03/Feature03";

const WHY_CHOOSE_US = () => {
	const DATA = [
		{ color: "red", img: "features1.png", title: "Dedicated IT Solution" },
		{ color: "green", img: "features2.png", title: "Expertise & Leadership" },
		{ color: "gold", img: "features3.png", title: "IT Industry Expertise" },
	];

	return (
		<section className="section section-content-center">
			<p className="suptitle">why choose us</p>
			<h2 className="subtitle">For over 12 years in the tech area.</h2>
			<p className="article-content text-center">
				There are many variations of passages of Lorem Ipsum available but the
				majority have suffered alteration
			</p>
			<div className="section-3cols">
				{/* <Feature01 />
				<Feature02 />
				<Feature03 /> */}

				{DATA.map((value) => (
					<Feature color={value.color} img={value.img} title={value.title} />
				))}
			</div>
		</section>
	);
};

export default WHY_CHOOSE_US;
