import React, { useState } from "react";
import { Link, animateScroll as scroll} from "react-scroll";

export const Navbar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	const closeMobileMenu = () => setClick(false);

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link onClick={scrollToTop} className="navbar-logo" to="inicio-section">
						HACHI
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link
								to="inicio-section"
								smooth={true}
								spy={true}
                                offset={-10}
								duration={500}
								delay={100}
								activeClass="active-li"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Inicio
							</Link>
						</li>
                        <li className="nav-item">
							<Link
								to="about-section"
								smooth={true}
								spy={true}
                                offset={-10}
								duration={2000}
								delay={100}
								activeClass="active-li"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Nosotros
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="service-section"
								smooth={true}
								spy={true}
                                offset={-10}
								duration={2000}
								delay={100}
								activeClass="active-li"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Servicios
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="project-section"
								smooth={true}
								spy={true}
                                offset={-10}
								duration={2000}
								delay={100}
								activeClass="active-li"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Proyectos
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="contact-section"
								smooth={true}
								spy={true}
								offset={-10}
								duration={2000}
								delay={100}
								activeClass="active-li"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Contacto
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};
