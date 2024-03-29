import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const FooterSection = () => {
	return (
		<section id="footer-section">
			<Container>
				<Row>
					<Col sm={12} md={{ span: 6, offset: 3 }}>
						<div className="social d-flex justify-content-center">
							<a className="mx-2" href="#!">
								<FontAwesomeIcon icon={faFacebookF} />
							</a>
							<a className="mx-2" href="#!">
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</div>
					</Col>
					<Col sm={12} md={{ span: 6, offset: 3 }}>
						<footer className="footer small text-center text-white-50">
							Copyright © Hachi Estudio 2020
						</footer>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
