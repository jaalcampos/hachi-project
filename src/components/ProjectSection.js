import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { projectData } from "../data/projectData";
import { GalleryComponent } from "./GalleryComponent";

export const ProjectSection = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleOpen = () => setShow(true);

	return (
		<div className="project-section" name="project-section">
			<Container>
				<h3>PROYECTOS</h3>
				<hr className="line" />
				<Row>
					{projectData.map((project) => (
						<Col md={4} sm={12} xs={12}>
							<div className="card-galery">
								<div className="card-img zoom">
									<img src={project.img} />
								</div>
								<div className="card-content">
									<Row>
										<Col md={12}>
											<h4 className="subtitle-black">{project.title}</h4>
										</Col>
										<Col md={12}>
											<Button variant="outline-primary" onClick={handleOpen}>
												Ver Portafolio
											</Button>
										</Col>
									</Row>
								</div>
							</div>
						</Col>
					))}
				</Row>
				<GalleryComponent show={show} handleClose={handleClose} />
			</Container>
		</div>
	);
};
