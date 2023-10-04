import Services1 from "../Services1/Services1";

const SERVICES = () => {
	const DATA = [
		{
			img: "service1.png",
			title: "Design",
		},
		{
			img: "service2.png",
			title: "Development",
		},
		{
			img: "service3.png",
			title: "Online Marketing",
		},
		{
			img: "service4.png",
			title: "Business",
		},
		{
			img: "service5.png",
			title: "Technology",
		},
		{
			img: "service6.png",
			title: "Content Strategy",
		},
	];
	return (
		<div class="grid-3cols">
			{DATA.map((value) => (
				// <article class="article-service">
				// 	<img src={`/img/${value.img}`} alt="" />
				// 	<h3 class="article-service-title">{value.title}</h3>
				// </article>
				<Services1 img={value.img} title={value.title}/>
			))}
		</div>
	);
};

export default SERVICES;
