import Project from "../../components/Project/Project";
import Carousel from "../../components/Carousel/Carousel";
import { Parallax } from "react-scroll-parallax";
import "./Projects.scss";

const Projects = () => {
	return (
		<div className="projects__wrapper">
			{/* <Parallax className="projects" y={["500px", "-100px"]}>
				<span>ouR projects</span>
			</Parallax> */}
			<div className="projects__carousel-wrapper">
				<Carousel className="projects__carousel">
					<Project
						src="./images/fern.svg"
						title="Tittles"
						content="Description"
					/>
					<Project />
					<Project />
					<Project />
					<Project />
					<Project />
				</Carousel>
			</div>
		</div>
	);
};

export default Projects;
