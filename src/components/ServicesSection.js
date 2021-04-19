import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPencilRuler,
	faHammer,
	faHome,
	faBuilding,
	faLaptopHouse,
	faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Card, Col, Container, Row } from "react-bootstrap";

export const ServicesSection = () => {
	return (
		<div className="service-content">
			<Container>
				<h3>NUESTROS SERVICIOS</h3>
				<hr className="line" />
				<Row>
					<Col md={4} sm={12}>
						<Card border="light" className="service-card">
							<Card.Header>
								<Card.Title>Asesoramiento</Card.Title>
							</Card.Header>
							<Card.Body>
								<Card.Text className="card-text">
									Guiamos al cliente desde el principio, estudiando sus
									necesidades y optando por la opción que más se adapte a su
									proyecto siempre aunando calidad y eficiencia.
								</Card.Text>
								<div className="icon-position">
									<div className="circle">
										<FontAwesomeIcon
											icon={faPencilRuler}
											className="centered"
										/>
									</div>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4} sm={12}>
						<Card border="light" className="service-card">
							<Card.Header>
								<Card.Title>Instalación</Card.Title>
							</Card.Header>
							<Card.Body>
								<Card.Text className="card-text">
									Nuestro personal, cualificado y formado dentro de la propia
									empresa, es una de las mejores opciones a la hora de instalar
									nuestros productos.
								</Card.Text>
								<div className="icon-position">
									<div className="circle">
										<FontAwesomeIcon icon={faHammer} className="centered" />
									</div>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4} sm={12}>
						<Card border="light" className="service-card">
							<Card.Header>
								<Card.Title>Carpintería para tu hogar</Card.Title>
							</Card.Header>
							<Card.Body>
								<Card.Text className="card-text">
									Asesoramos a cada cliente para adecuar la carpintería de su
									hogar a sus necesidades.
								</Card.Text>
								<div className="icon-position">
									<div className="circle">
										<FontAwesomeIcon icon={faHome} className="centered" />
									</div>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4} sm={12}>
						<Card border="light" className="service-card">
							<Card.Header>
								<Card.Title>Soluciones para tu negocio</Card.Title>
							</Card.Header>
							<Card.Body>
								<Card.Text className="card-text">
									Contamos con amplia experiencia en decoración de tiendas,
									restaurantes y hoteles.
								</Card.Text>
								<div className="icon-position">
									<div className="circle">
										<FontAwesomeIcon icon={faBuilding} className="centered" />
									</div>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4} sm={12}>
						<Card border="light" className="service-card">
							<Card.Header>
								<Card.Title>Diseño completo</Card.Title>
							</Card.Header>
							<Card.Body>
								<Card.Text className="card-text">
									Diseñamos el proyecto de tus sueños, en Autocad para mayor
									precisión.
								</Card.Text>
								<div className="icon-position">
									<div className="circle">
										<FontAwesomeIcon
											icon={faLaptopHouse}
											className="centered"
										/>
									</div>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4} sm={12}>
						<Card border="light" className="service-card">
							<Card.Header>
								<Card.Title>Gestión integral del proyecto</Card.Title>
							</Card.Header>
							<Card.Body>
								<Card.Text className="card-text">
									Nos encargamos del diseño, fabricación e instalacion de cada
									proyecto, procurando siempre por un acabado de alta calidad.
								</Card.Text>
								<div className="icon-position">
									<div className="circle">
										<FontAwesomeIcon icon={faSyncAlt} className="centered" />
									</div>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
