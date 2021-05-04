import React from "react";
import { Col, Row, Button, Container } from "react-bootstrap";
import { Parallax } from "react-parallax";
import { scroller } from "react-scroll";
import hachiImage from "../images/IMG_0021.JPG";

export const ParalaxComponent = () => {
	const scrollType = {
		duration: 500,
		delay: 50,
		smooth: true, // linear "easeInQuint" "easeOutCubic" https://easings.net/es
		offset: -10,
	};

	const goToProjects = () => {
		scroller.scrollTo("project-section", scrollType);
	};

	return (
		<Parallax bgImage={hachiImage} strength={600}>
			<Container>
				<Row className="parallax-content justify-content-center align-items-center">
					<Col xs={6} sm={6} md={{ span: 3, offset: 3 }} className="text-center">
						<div className="parallax-text">
							<p>Conoce nuestro trabajo</p>
						</div>
					</Col>
					<Col xs={6} sm={6} md={6} className="text-center">
						<Button
							variant="primary"
							size="lg"
							className="float-left"
							onClick={goToProjects}
						>
							Ver más...
						</Button>
					</Col>
				</Row>
			</Container>
		</Parallax>
	);
};
