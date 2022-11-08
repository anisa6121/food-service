import React from 'react';

import img1 from '../../assets/image/1.jpg'

import img2 from "../../assets/image/2.jpg";
import img3 from "../../assets/image/3.jpg";
const Slider = () => {
    return (
		<div className="carousel w-full">
			<div id="slide1" className="carousel-item relative w-full">
				<img
					className="w-full rounded-xl"
					src={img3}
					alt=""
				/>

				<div className="absolute flex justify-center w-full transform -translate-y-1/2 top-3/4">
					<div className="p-4 text-center text-5xl text-lime-400 font-bold">
						Our Special Dish
						<br />
						<p className="text-blue-700 text-3xl mt-7">
							Fried Chiken
						</p>
					</div>
				</div>

				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide4" className="btn btn-circle">
						❮
					</a>
					<a href="#slide2" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide2" className="carousel-item relative w-full">
				<img
					className="w-full rounded-xl"
					src={img2}
					alt=""
				/>

				<div className="absolute flex justify-center w-full transform -translate-y-1/2 top-3/4">
					<div className="p-4 text-center text-5xl text-lime-400 font-bold">
						Our Special Dish
						<br />
						<p className="text-blue-700 text-3xl mt-7">
							Beef Pizza
						</p>
					</div>
				</div>

				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide1" className="btn btn-circle">
						❮
					</a>
					<a href="#slide3" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide3" className="carousel-item relative w-full">
				<img
					className="w-full rounded-xl"
					src={img1}
					alt=""
				/>

				<div className="absolute flex justify-center w-full transform -translate-y-1/2 top-3/4">
					<div className="p-4 text-center text-5xl text-lime-400 font-bold">
						Our Special Dish
						<br />
						<p className="text-blue-700 text-3xl mt-7">
						Chiken Kabab
						</p>
					</div>
				</div>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide2" className="btn btn-circle">
						❮
					</a>
					<a href="#slide4" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
		</div>
    );
};

export default Slider;