import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDetail = () => {

	const foodService = useLoaderData();
	console.log(foodService)
	const {img, title ,price, description} = foodService;

    return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 py-24 mx-auto flex flex-wrap">
				<div className="flex flex-wrap -m-4">
					<div className="p-4 lg:w-1/2 md:w-full">
						

						<div className=" p-6 rounded-md shadow-md bg-pink-200 text-black">
							<img
								src={img}
								alt=""
								className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
							/>

							<div className="mt-6 mb-2">
								<h2 className="text-xl font-semibold tracking-wide">
									{title}
								</h2>
								<span className="block text-xl font-medium tracking-widest text-lime-600">
									Price: {price}
								</span>
							</div>

							
							<p classNameName="text-black text-xl">
								{description}
							</p>
						</div>
					</div>

					<div className="p-4 lg:w-1/2 md:w-full">
						<div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
							<div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-10 h-10"
									viewBox="0 0 24 24"
								>
									<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
									<circle
										cx="12"
										cy="7"
										r="4"
									></circle>
								</svg>
							</div>
							<div className="flex-grow">
								<h2 className="text-gray-900 text-lg title-font font-medium mb-3">
									The Catalyzer
								</h2>
								<p className="leading-relaxed text-base">
									Blue bottle
									crucifix vinyl
									post-ironic four
									dollar toast
									vegan taxidermy.
									Gastropub indxgo
									juice poutine.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
};

export default FoodDetail;