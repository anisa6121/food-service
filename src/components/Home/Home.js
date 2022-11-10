import React from "react";
import useTitle from "../../hooks/useTitle";
import Slider from "../Slider/Slider";
import FoodService from "./FoodService";
import Hero from "./Hero";
import Section from "./Section";

const Home = () => {
	useTitle("Home");
	return (
		<div className="">
			<Hero></Hero>
			<Slider></Slider>
			<FoodService></FoodService>
			<Section></Section>
		</div>
	);
};

export default Home;
