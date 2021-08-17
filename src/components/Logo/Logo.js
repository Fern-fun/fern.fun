import React from "react";
import { Parallax } from "react-scroll-parallax";
import ReactTypingEffect from "react-typing-effect";
import "./Logo.scss";

function Logo() {
	return (
		<div>
			<Parallax className="logo__panel" y={[-100, 100]}>
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
			</Parallax>
			<Parallax className="scroll-down-arrow" y={[-80, 80]}>
				<span>V</span>
			</Parallax>
		</div>
	);
}

export default Logo;
