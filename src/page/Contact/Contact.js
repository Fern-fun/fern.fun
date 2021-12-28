import "./Contact.scss";
import Fern from "../../components/Fern/Fern";
import { Parallax } from "react-scroll-parallax";
import ContactIcon from "../../components/ContactIcon/ContactIcon";
import { isMobile } from "react-device-detect";

const Contact = () => {
	return (
		<div className="contact__wrapper">
			{isMobile ? (
				<div className="contact-mobile">
					<span>contact us</span>
				</div>
			) : (
				<div className="contact">
					<span>contact us</span>
				</div>
			)}
			{isMobile ? (
				<div className="contact__sub-mobile">
					<ContactIcon
						src="./images/github.svg"
						href="https://github.com/Fern-fun"
					/>
					<ContactIcon
						src="./images/gmail.svg"
						href="mailto:jacob@fern.fun?subject=Message%20to%20Fern.fun&body=Hi%20..."
					/>
					<ContactIcon
						src="./images/linkedin.svg"
						href="https://www.linkedin.com/company/fern-fun"
					/>
				</div>
			) : (
				<div className="contact__sub">
					<div>
						<ContactIcon
							src="./images/github.svg"
							href="https://github.com/Fern-fun"
						/>
						<ContactIcon
							src="./images/gmail.svg"
							href="mailto:jacob@fern.fun?subject=Message%20to%20Fern.fun&body=Hi%20..."
						/>
						<ContactIcon
							src="./images/linkedin.svg"
							href="https://www.linkedin.com/company/fern-fun"
						/>
					</div>
				</div>
			)}
			{isMobile ? (
				<Fern
					height="500px"
					left="-150px"
					top="-150px"
					rotate="160deg"
					blur
					opacity="0.2"
				/>
			) : (
				<Fern height="500px" left="-150px" top="-150px" rotate="160deg" />
			)}
			{isMobile ? (
				<Fern
					height="550px"
					right="-100px"
					top="330px"
					rotate="-50deg"
					blur
					opacity="0.2"
				/>
			) : (
				<Fern height="550px" right="-100px" top="330px" rotate="-50deg" />
			)}
		</div>
	);
};

export default Contact;
