import React from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import NavigationMob from "../../shared/components/Navigation/NavigationMob";
import Footer from "../../shared/components/Footer/Footer";
import Subjects from "../components/HomePage/Subjects";
import Header from "../components/HomePage/Header";
import Form from "../components/HomePage/Form";
import Testimonials from "../components/HomePage/Testimonials";

const Index = () => {
	const navigate = useNavigate();

	const goToCN = () => {
		navigate("/cn");
	};
	return (
		<>
			<NavigationMob />
			<Header />
			<Subjects />
			<Form />
			<Testimonials />
			<Footer />
		</>
	);
};

export default Index;
