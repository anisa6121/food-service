import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const FoodDetail = () => {

	const { user } = useContext(AuthContext);

	const foodService = useLoaderData();
	console.log(foodService)
	const {img, title ,price, description, _id} = foodService;

	const handleAddReview = (event) => {
	    event.preventDefault();

		const form = event.target;
	
		const email = user?.email || "unregistered";
		const review = form.review.value;

		const serviceReview = {
			serviceId: _id,
			serviceName: title,
			Price:price,
			email,
            review
			
			
		};
		console.log(serviceReview);


		fetch("http://localhost:5000/reviews", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(serviceReview)
		})
			.then((res) => res.json())
			.then((data) => {
			

  if (data.acknowledged) {
	  toast.success("Review Added ");
	  form.reset()
		console.log(data);
		
  }

			})
			.catch((err) => console.log(err));
		
}


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

						<form
							onSubmit={handleAddReview}
							noValidate=""
							action=""
							className="m-4 space-y-5 ng-untouched ng-pristine ng-valid"
						>
							<div className="space-y-4">
							<div>
									{user?.email ? (
										<>
											<textarea
												required
												type="text"
												name="review"
												className="textarea textarea-secondary w-full"
												placeholder="Enter Your  Review"
											></textarea>
										</>
									) : (
										<>
											<h1 className="text-2xl font-bold">
												Please
												Login.
												And
												Add
												a
													Review
													<br />
								<span className='text-xl text-blue-700'>
									<Link to="/login">
										Login
									</Link>
									</span>
								</h1>
										</>
									)}
								</div>

								<div className="space-y-2">
									<div>
										<button
											type="submit"
											className="text-xl w-1/2 px-8 py-3 font-semibold rounded-md bg-blue-500 text-white"
										>
											Add
										</button>
									</div>
								</div>
							</div>
						</form>
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