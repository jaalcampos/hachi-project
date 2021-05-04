import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Container, Row } from "react-bootstrap";
import { serviceData } from "../data/serviceData";

export const ServicesSection = () => {
	return (
		<div className="service-content" name="service-section">
			<Container>
				<h3>NUESTROS SERVICIOS</h3>
				<hr className="line" />
				<Row>
					{serviceData.map(({ title, description, icon }) => (
						<Col md={4} sm={12} key={title}>
							<Card border="light" className="service-card">
								<Card.Header>
									<Card.Title className="subtitle-black">{title}</Card.Title>
								</Card.Header>
								<Card.Body>
									<Card.Text className="card-text">{description}</Card.Text>
									<div className="icon-position">
										<div className="circle">
											<FontAwesomeIcon icon={icon} className="centered" />
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};
