import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Parallax } from "react-parallax";
import hachiImage from "../images/IMG_0021.JPG";

export const ParalaxComponent = () => {
	return (
		<Parallax bgImage={hachiImage} strength={600}>
			<Row className="parallax-content justify-content-center align-items-center">
				<Col xs={6} sm={6} md={{ span: 3, offset: 3 }} className="text-center">
					<div className="parallax-text">
						<p>Conoce nuestro trabajo</p>
					</div>
				</Col>
				<Col xs={6} sm={6} md={6} className="text-center">
					<Button variant="primary" size="lg" className="float-left">
						Ver más...
					</Button>
				</Col>
			</Row>
		</Parallax>
	);
};
