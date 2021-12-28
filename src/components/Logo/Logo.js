import React from "react";
import { isMobile } from "react-device-detect";
import { Parallax } from "react-scroll-parallax";
import ReactTypingEffect from "react-typing-effect";
import Fern from "../Fern/Fern";
import "./Logo.scss";

function Logo() {
	return (
		<div>
			<Parallax className="logo__panel" y={[90, -90]}>
				{isMobile ? (
					<ReactTypingEffect
						cursorClassName="logo__cursor-mobile"
						cursor="/"
						text={["feRn.fun"]}
						displayTextRenderer={(text, i) => {
							return (
								<div className="logo-mobile">
									{text.split("").map((char, i) => {
										const key = `${i}`;
										return <span key={key}>{char}</span>;
									})}
								</div>
							);
						}}
					/>
				) : (
					<ReactTypingEffect
						cursorClassName="logo__cursor"
						cursor="/"
						text={["feRn.fun"]}
						displayTextRenderer={(text, i) => {
							return (
								<div className="logo">
									{text.split("").map((char, i) => {
										const key = `${i}`;
										return <span key={key}>{char}</span>;
									})}
								</div>
							);
						}}
					/>
				)}
			</Parallax>
			<div className="scroll-down-arrow">
				<span id="first-arrow">V</span>
			</div>
			<div className="scroll-down-arrow">
				<span>V</span>
			</div>

			{isMobile ? (
				<Fern
					height="700px"
					right="-200px"
					top="-300px"
					rotate="-30deg"
					opacity="0.2"
					blur
				/>
			) : (
				<Fern height="700px" right="-200px" top="-300px" rotate="-30deg" />
			)}
		</div>
	);
}

export default Logo;
