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
            src="./images/cloud.svg"
            github="https://github.com/Fern-fun/cloud.fern.fun"
            title="cloud.fern.fun"
            content="Cloud storage like google drive"
          />
          <Project
            src="./images/pi.png"
            github="https://github.com/Fern-fun/pi.fern.fun"
            title="pi.fern.fun"
            content="Page our rasperrypi"
          />
          <Project
            src="./images/fern.svg"
            github="https://github.com/Fern-fun/Minecraft-server-page"
            title="Minecraft server page"
            content="Page for minecraft server"
          />
          <Project
            src="./images/fern.svg"
            github="https://github.com/Fern-fun/Drive"
            title="Drive"
            content="First our project"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
