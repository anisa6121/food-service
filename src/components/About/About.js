import React from "react";

import img3 from "../../assets/img3.jpg";
import useTitle from "../../hooks/useTitle";
const About = () => {
	useTitle("About Us");
	return (
		<section className="text-gray-600 body-font">
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
						We Provide Healthy Food
					</h1>
					<p className="mb-8 text-2xl leading-relaxed">
						We always try to cook with fresh
						vegetables and meat. And everyone can
						eat healthy food. That is our goal and
						purpose
					</p>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<img
						className="object-cover object-center rounded"
						alt="hero"
						src={img3}
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
