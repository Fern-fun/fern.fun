import "./Project.scss";

const Project = (props) => {
	return (
		<div className="project">
			<h3 className="project__title">{props.title}</h3>
			<img className="project__picture" src={props.src} alt="" />
			<span className="project__content">{props.content}</span>
			<a href={props.reddit} className="project__reddit">
				<img src="./images/github.svg" />
			</a>
		</div>
	);
};

export default Project;
