import Top from "../Top/Top";
import Header from "../Header/Header";
import Article from "../Article/Article";
import Footer from "../Footer/Footer";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const HOME_PAGE = () => {
	return (
		<>
			<div className="container">
				<Top />
				<Header
					title="managed it services"
					subtitle="Global Managed <br/> IT Services"
				/>
				<Article
					title="about our company"
					subtitle="We do design, code & develop."
					button="Read More"
					img="about-image-left.png"
				/>
				<WhyChooseUs />
				<Footer />
			</div>
		</>
	);
};

export default HOME_PAGE;
