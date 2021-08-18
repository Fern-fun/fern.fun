import Slider from "react-slick";
import Project from "./Project";
import { Parallax } from "react-scroll-parallax";
import "./Projects.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true
	};

	return (
		<div className="projects__wrapper">
			<Parallax className="projects" y={["500px", "-100px"]}>
				<span>ouR pRojects</span>
			</Parallax>
			<div className="projects__carousel-wrapper">
				<Slider {...settings} className="projects__carousel">
					<Project />
					<Project />
					<Project />
					<Project />
					<Project />
					<Project />
				</Slider>
			</div>
		</div>
	);
};

export default Projects;
