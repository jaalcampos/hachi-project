import React from "react";

export const HeaderSection = ({ title, description, img, btnText, goLeft, goRight }) => {
	return (
		<div className="header-container">
			<img src={img} />
			<div className="header-text">
				<p>{title.toUpperCase()}</p>
				<h1>{description.toUpperCase()}</h1>
				<button>{btnText}</button>
			</div>
			<button id="goLeft" className="btn-slide" onClick={goLeft}>
				<i className="fas fa-angle-left" />
			</button>
			<button id="goRight" className="btn-slide" onClick={goRight}>
				<i className="fas fa-angle-right" />
			</button>
		</div>
	);
};
