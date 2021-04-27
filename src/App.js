import React from "react";
import { AppRouter } from "./routers/AppRouter";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { ProjectSection } from "./components/ProjectSection";
import { ServicesSection } from "./components/ServicesSection";

function App() {
	return (
		<>
			<header className="header-content">
				<Navbar />
				<Header />
			</header>
			<AboutSection />
			<ServicesSection />
			<ProjectSection />
			<ContactSection />
			<FooterSection />
		</>
	);
}

export default App;
