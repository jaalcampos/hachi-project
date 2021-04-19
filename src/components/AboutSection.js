import React from "react";
import hachiLogo from "../images/LogoHachi.png";
import hachi1 from "../images/IMG_2128.png";
import hachi2 from "../images/IMG_2129.png";
import hachi3 from "../images/IMG_2130.png";
import { Col, Container, Row } from "react-bootstrap";

export const AboutSection = () => {
	return (
		<div className="about-content">
			<Container>
				<Row>
					<Col md={6}>
						<Row>
							<Col md={12}>
								<h3>BIENVENIDOS A</h3>
								<hr className="line-about" />
							</Col>
							<Col md={12}>
								<img src={hachiLogo} className="img-fluid" />
							</Col>
						</Row>
					</Col>
					<Col md={6}>
						<p className="about-desc">
							En HACHI estudio fabricamos muebles a la medida, los mejores diseños con
							espacios funcionales.
						</p>
					</Col>
				</Row>
				<Row className="p-5">
					<Col xs={12} sm={12} md={12}>
						<h3 className="text-center mt-5 mb-5">¿Qué hacemos?</h3>
					</Col>
					<Col xs={12} sm={12} md={6}>
						<img src={hachi2} className="img-fit" />
					</Col>
					<Col xs={12} sm={12} md={6}>
						<h4 className="subtitle mt-5">Residencial</h4>
						<p className="desc mr-5">
							En HACHI, te ofrecemos diseño, fabricación e instalación de los muebles
							para tu hogar, trabajamos en propuestas personalizadas para satisfacer
							tus necesidades, buscando optimizar todos los espacios de tu hogar, en
							los materiales de tu preferencia. Dale a tu casa un toque de elegancia
							excepcional.
						</p>
					</Col>
					<Col xs={12} sm={12} md={6}>
						<h4 className="subtitle mt-5">Comercial</h4>
						<p className="desc mr-5">
							Servicio profesional, que atiende los requerimientos del cliente para
							todo tipo de muebles. Revisamos las condiciones de sus espacios con el
							fin de elaborar un proyecto que cumpla con todas sus expectativas. ¡Trae
							tu idea, nosotros la fabricamos!
						</p>
					</Col>
					<Col xs={12} sm={12} md={6}>
						<img src={hachi3} className="img-fit" />
					</Col>
					<Col xs={12} sm={12} md={6}>
						<img src={hachi1} className="img-fit" />
					</Col>
					<Col xs={12} sm={12} md={6}>
						<h4 className="subtitle mt-5">Oficina</h4>
						<p className="desc mr-5">
							Diseños de muebles, fabricación e instalación de productos en madera
							para todo tipo de espacios. Proyectos de diseños de muebles dirigidos a
							nuevos proyectos o proyectos de remodelación total.
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
