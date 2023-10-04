import SocialIcon1 from "../SocialIcon1/SocialIcon1";

const SOCIAL_ICON = () => {
	const DATA = [
		{
			img: "facebook.png",
		},
		{
			img: "twitter.png",
		},
		{
			img: "instagram.png",
		},
		{
			img: "snapchat.png",
		},
		{
			img: "pinterest.png",
		},
		{
			img: "youtube.png",
		},
	];
	return (
		<p class="footer-socials">
			{DATA.map((value) => (
				// <a href="#nothing">
				// 	<img src={`/img/${value.img}`} alt="" />
				// </a>
				<SocialIcon1 img={value.img}/>
			))}
		</p>
	);
};

export default SOCIAL_ICON;
