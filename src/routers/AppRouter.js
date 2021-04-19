import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { FooterSection } from "../components/FooterSection";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Home } from "../components/pages/home/Home";
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
				<ContactSection />
				<FooterSection/>
			</div>
		</Router>
	);
};
