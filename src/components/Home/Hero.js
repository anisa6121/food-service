import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/img.jpg'
const Hero = () => {
    return (
		<div className="bg-white-800 text-black-100 mb-5">
			<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
				<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
					<h1 className="text-4xl font-bold leading-none sm:text-4xl">
						The Fastest Delivery  
						<span className="m-2  text-orange-400">
							in Your City
						</span>
					</h1>

					<p className="mt-6 mb-8 text-2xl sm:mb-12">
						Get our services for better quality
						food and fast delivery.
						<br className="hidden md:inline lg:hidden" />
						Our mission is to bring healthy food
						to everyone.
					</p>

					<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
						<Link
							
							to="/allFood"
							className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900"
						>
							See Our All Foods
						</Link>
					</div>
				</div>

				<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
					<img
						src={img}
						alt=""
						className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
					/>
				</div>
			</div>
		</div>
    );
};

export default Hero;