import Brands1 from "../Brands1/Brands1";

const BRANDS = () => {
	const DATA = [
		{
			img: "client1.png",
		},
		{
			img: "client2.png",
		},
		{
			img: "client3.png",
		},
		{
			img: "client4.png",
		},
	];

	return (
		<div className="clients">
			{DATA.map((value) => (
				<Brands1 img={value.img} />
			))}
		</div>
	);
};

export default BRANDS;
