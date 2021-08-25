import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";
import Home from "./page/Home/Home";
import AboutUs from "./page/AboutUs/AboutUs";
import Projects from "./page/Projects/Projects";
import Contact from "./page/Contact/Contact";
import { isMobile } from "react-device-detect";
import UnderConstructions from "./components/UnderConstructions/UnderConstructions";

function App() {
	if (isMobile) {
		return <UnderConstructions />;
	}
	return (
		<div className="App">
			<ParallaxProvider>
				<div className="section" id="LandingPage">
					<Home />
				</div>
				<div className="section" id="AboutUs">
					<AboutUs />
				</div>
				<div className="section" id="Projects">
					<Projects />
				</div>
				<div className="section" id="Contact">
					<Contact />
				</div>
			</ParallaxProvider>
		</div>
	);
}

export default App;
