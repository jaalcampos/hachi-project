import React from "react";
import hachi1 from "../images/hachi-1.jpg";
import hachi2 from "../images/hachi-2.jpg";
import hachi3 from "../images/hachi-3.jpg";
import { Carousel } from "react-bootstrap";

export const Header = () => {
	return (
		<div className="header-content">
			<Carousel fade>
				<Carousel.Item>
					<img className="d-block w-100" src={hachi1} alt="First slide" />
					<Carousel.Caption as="div" className="header-title">
						<h1>HACHI Estudio</h1>
						<hr className="line-header"/>
						<p>Diseño en Madera.</p>
						<button>Nuestro portafolio</button>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={hachi2} alt="First slide" />
					<Carousel.Caption as="div" className="header-title">
						<h1>HACHI Estudio</h1>
						<hr className="line-header"/>
						<p>Calidad y Compromiso.</p>
						<button>Nuestro portafolio</button>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={hachi3} alt="First slide" />
					<Carousel.Caption as="div" className="header-title">
						<h1>HACHI Estudio</h1>
						<hr className="line-header"/>
						<p>Optimizamos tu espacio.</p>
						<button>Nuestro portafolio</button>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};
