import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import RightSide from "./RightSide";

const FoodDetail = () => {
	useTitle("FoodDetails");
	const { user } = useContext(AuthContext);
	let { id } = useParams();

	const navigate = useNavigate();

	const foodService = useLoaderData();

	console.log(foodService);
	const { img, title, price, description, _id } = foodService;

	const handleAddReview = (event) => {
		event.preventDefault();

		const form = event.target;

		const email = user?.email || "unregistered";
		const review = form.review.value;

		const serviceReview = {
			serviceId: _id,
			serviceName: title,
			Price: price,
			email,
			review,
		};
		console.log(serviceReview);

		fetch("https://services-server-anisa6121.vercel.app/reviews", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(serviceReview),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					toast.success("Review Added ");
					form.reset();
					navigate("/allFood");
					console.log(data);
				}
			})
			.catch((err) => console.log(err));
	};

	const [allData, setData] = useState([]);

	useEffect(() => {
		if (id) {
			fetch(
				`https://services-server-anisa6121.vercel.app/getallReviews/${id}`
			)
				.then((res) => res.json())
				.then((data) => {
					setData(data);
					console.log(">>>", data);
				})

				.catch((err) => console.log(err));
		}
	}, [id]);

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
												<span className="text-xl text-blue-700">
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
						<h3 className="text-2xl text-center">
							{" "}
							Review {allData.length}
						</h3>
						{allData.map((data) => (
							<RightSide
								ke={data._id}
								data={data}
							></RightSide>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FoodDetail;
