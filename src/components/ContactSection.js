import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactData } from "../data/contctData";

export const ContactSection = () => {
	const [values, setValues] = useState({ name: "", email: "", message: "" });
	const handleInputChange = ({ target }) => {
		setValues({
			...values,
			[target.name]: target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(values);
	};

	return (
		<div className="contact-content" name="contact-section">
			<Container>
				<h3>CONTACTO</h3>
				<hr className="line" />
				<Row>
					<Col xs={12} md={6}>
						<Row>
							<Col md={{ span: 8, offset: 2 }}>
								<Form onSubmit={handleSubmit}>
									<Form.Group>
										<Form.Row>
											<Form.Label className="subtitle-black">
												Nombre
											</Form.Label>
											<Form.Control
												required
												type="text"
												placeholder="Nombre"
												name="name"
												value={values.name}
												onChange={handleInputChange}
											/>
										</Form.Row>
									</Form.Group>
									<Form.Group>
										<Form.Row>
											<Form.Label className="subtitle-black">
												Email
											</Form.Label>
											<Form.Control
												required
												type="text"
												placeholder="Email"
												name="email"
												value={values.email}
												onChange={handleInputChange}
											/>
										</Form.Row>
									</Form.Group>
									<Form.Group controlId="exampleForm.ControlTextarea1">
										<Form.Row>
											<Form.Label className="subtitle-black">
												Mensaje
											</Form.Label>
											<Form.Control
												as="textarea"
												rows={3}
												name="message"
												value={values.message}
												onChange={handleInputChange}
											/>
										</Form.Row>
									</Form.Group>
									<Form.Row>
										<Button variant="outline-primary" type="submit" block>
											Enviar Mensaje
										</Button>
									</Form.Row>
								</Form>
							</Col>
						</Row>
					</Col>
					<Col xs={12} sm={12} md={6}>
						<Row>
							<Col xd={12} sm={12} md={{ span: 8, offset: 2 }}>
								{contactData.map(({ title, description, icon }) => (
									<Row key={title}>
										<Col xs={2} sm={2} md={2}>
											<FontAwesomeIcon icon={icon} className="icon ml-2" />
										</Col>
										<Col xs={10} sm={10} md={10}>
											<Row>
												<Col md={12}>
													<span className="subtitle">{title}</span>
												</Col>
												<Col md={12}>
													<span className="desc">{description}</span>
												</Col>
											</Row>
										</Col>
										<hr className="line-list" />
									</Row>
								))}
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
