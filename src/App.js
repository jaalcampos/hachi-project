import React from "react";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { ProjectSection } from "./components/ProjectSection";
import { ServicesSection } from "./components/ServicesSection";
import { ParalaxComponent } from "./components/ParalaxComponent";
import { ButtonFloating } from "./components/ButtonFloating";

function App() {
	return (
		<>
			<header className="header-content" name="inicio-section">
				<Navbar />
				<Header />
			</header>
			<AboutSection />
			<ParalaxComponent/>
			<ServicesSection />
			<ProjectSection />
			<ContactSection />
			<FooterSection />
			<ButtonFloating/>
		</>
	);
}

export default App;
