import "./Contact.scss";
import Fern from "../../components/Fern/Fern";
import { Parallax } from "react-scroll-parallax";
import ContactIcon from "../../components/ContactIcon/ContactIcon";

const Contact = () => {
	return (
		<div className="contact__wrapper">
			<Parallax className="contact" y={["500px", "-100px"]}>
				<span>contact us</span>
			</Parallax>
			<Parallax className="contact__sub" y={["500px", "0px"]}>
				<ContactIcon src="./images/github.svg" href="#" />
				<ContactIcon src="./images/gmail.svg" href="#" />
				<ContactIcon src="./images/linkedin.svg" href="#" />
			</Parallax>
			<Parallax>
				<Fern height="500px" left="-150px" top="-150px" rotate="160deg" />
			</Parallax>
			<Fern height="550px" right="-100px" top="330px" rotate="-50deg" />
		</div>
	);
};

export default Contact;
