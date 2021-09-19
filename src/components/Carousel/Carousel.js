import { useState } from "react";
import "./Carousel.scss";

const Carousel = (props) => {
	// vh = view port height
	const vh =
		Math.round(
			Math.max(
				document.documentElement.clientHeight || 0,
				window.innerHeight || 0
			) * 100
		) / 100;
	const listItemWidth = Math.round(0.615 * vh * 10) / 10;
	// console.log(listItemWidth);
	const listWidth = (props.children.length - 1) * listItemWidth;
	const [translateAmount, setTranslateAmount] = useState(0);
	const prevHandler = () => {
		if (translateAmount === 0) {
			return;
		} else {
			setTranslateAmount((prev) => {
				return prev + listItemWidth;
			});
		}
	};
	const nextHandler = () => {
		if (-translateAmount === listWidth) {
			return;
		} else {
			setTranslateAmount((prev) => {
				return prev - listItemWidth;
			});
		}
	};

	const style = {
		width: `${listWidth}px`,
		transform: `translateX(${translateAmount}px)`
	};

	return (
		<div className="carousel__wrapper">
			<button className="carousel__button-prev" onClick={prevHandler}>
				V
			</button>
			<button className="carousel__button-next" onClick={nextHandler}>
				V
			</button>
			<div className="carousel__list">
				<div className="list__wrapper" style={style}>
					{props.children}
				</div>
			</div>
			<ul></ul>
		</div>
	);
};

export default Carousel;
