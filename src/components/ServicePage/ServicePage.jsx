import ArticleService from "../ArticleService/ArticleService";
import Brands from "../Brands/Brands";
import Footer from "../Footer/Footer";
import Top from "../Top/Top";
import Services from "../Services/Services";
import Article from "../Article/Article";

const SERVICE_PAGE = () => {
	return (
		<>
			<Top />
			<ArticleService />
			<Brands />
			<Article
				title="about our company"
				subtitle="We do design, code & develop."
				button="Read More"
				img="about-image-left.png"
				css="row-reverse"
			/>
			<Services />
			<Footer />
		</>
	);
};

export default SERVICE_PAGE;
