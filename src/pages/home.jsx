import React from "react";
import HeroSection from "../components/HeroSection";
import GetStarted from "../components/GetStarted";
import TrustedSection from "../components/TrustedSection";
import TopRatedCourses from "../components/TopRatedCourses";
import FaqSection from "../components/FaqSection";
import StudentReviews from "../components/studentReviews";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<main className="p-8">
			{/* Hero and get-started are part of the home page so routing replaces them */}
			<HeroSection />
			<GetStarted />
			<TrustedSection />
			<TopRatedCourses />
			<FaqSection />
			<StudentReviews />
			<Footer />
			{/* other home content can go here */}
		</main>
	);
};

export default Home;

