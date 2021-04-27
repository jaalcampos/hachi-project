import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { FooterSection } from "../components/FooterSection";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { ProjectSection } from "../components/ProjectSection";
import { ServicesSection } from "../components/ServicesSection";

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<header className="header-content">
					<Navbar />
					<Header />
				</header>
				<AboutSection />
				<ServicesSection />
				<ProjectSection />
				<ContactSection />
				<FooterSection />
			</div>
		</Router>
	);
};
