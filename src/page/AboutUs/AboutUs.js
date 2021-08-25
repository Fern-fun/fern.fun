import { Parallax } from "react-scroll-parallax";
import Fern from "../../components/Fern/Fern";
import "./AboutUs.scss";

const AboutUs = () => {
	return (
		<div className="about-us__wrapper">
			<Parallax className="about-us" y={["500px", "-100px"]}>
				<span>About us</span>
			</Parallax>
			<Parallax className="about-us__sub" y={["500px", "0px"]}>
				<span>Hello, I only passing</span>
			</Parallax>
			<Parallax>
				<Fern height="500px" left="-150px" top="-150px" rotate="160deg" />
			</Parallax>
			<Fern height="550px" right="-100px" top="330px" rotate="-50deg" />
		</div>
	);
};

export default AboutUs;
