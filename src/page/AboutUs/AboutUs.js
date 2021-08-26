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
				<span>
				<p>Hi, we are a small team of programers that consists of a full stack and a frontend developer.</p>
				<p>Fern.fun is a representation of our adventure with programing. We're an open team looking for new members.</p>
				<p>If you want to join us or cooperate with us, we're glad to hear it, contact.us</p>
				</span>
			</Parallax>
			<Parallax>
				<Fern height="500px" left="-150px" top="-150px" rotate="160deg" />
			</Parallax>
			<Fern height="550px" right="-100px" top="330px" rotate="-50deg" />
		</div>
	);
};

export default AboutUs;
