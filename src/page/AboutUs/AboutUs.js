import { isMobile } from "react-device-detect";
import { Parallax } from "react-scroll-parallax";
import Fern from "../../components/Fern/Fern";
import "./AboutUs.scss";

const AboutUs = () => {
	const aboutUsText = `Hi, we are a small team of programers that consists of a full stack
  and a frontend developer. Fern.fun is a representation of our
  adventure with programing. We're an open team looking for new members.
  If you want to join us or cooperate with us, we're glad to hear it,
  contact us.`;

	return (
		<div className="about-us__wrapper">
			{isMobile ? (
				<div className="about-us-mobile">
					<span>About us</span>
				</div>
			) : (
				<Parallax className="about-us">
					<span>About us</span>
				</Parallax>
			)}
			{isMobile ? (
				<div className="about-us__sub-mobile">
					{" "}
					<span>{aboutUsText}</span>{" "}
				</div>
			) : (
				<Parallax className="about-us__sub">
					<span>{aboutUsText}</span>
				</Parallax>
			)}

			{isMobile ? (
				<Fern
					height="500px"
					left="-150px"
					top="-150px"
					rotate="160deg"
					opacity="0.2"
					blur
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

export default AboutUs;
