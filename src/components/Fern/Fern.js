import { Parallax } from "react-scroll-parallax";
import "./Fern.scss";

const Fern = (props) => {
	const imgHeight = props.height;
	const imgLeft = props.left;
	const imgRight = props.right;
	const imgTop = props.top;
	const imgBottom = props.bottom;
	const imgRotate = props.rotate;
	const imgOpacity = props.opacity ? props.opacity : 1;
	const imgBlur = props.blur ? "blur" : "";

	const style = {
		height: imgHeight,
		left: imgLeft,
		top: imgTop,
		right: imgRight,
		bottom: imgBottom,
		transform: `rotate(${imgRotate})`,
		position: "absolute",
		opacity: imgOpacity
	};

	return (
		<img
			src="./images/fern.svg"
			id="fernImg"
			alt=""
			style={style}
			className={imgBlur}
		/>
	);
};

export default Fern;
