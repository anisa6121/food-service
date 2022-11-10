import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AddService = () => {
	useTitle("AddService");
	const navigate = useNavigate();
	const handleAddService = (event) => {
		event.preventDefault();

		const form = event.target;
		const img = form.img.value;

		const title = form.title.value;

		const price = form.price.value;

		const description = form.description.value;

		const service = { img, title, price, description };
		console.log(service);

		fetch("https://services-server-beta.vercel.app/allServices", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(service),
		})
			.then((res) => res.json())

			.then((data) => {
				if (data.acknowledged) {
					toast.success("Service Added Successfully");
					console.log(data);
					form.reset();
					navigate("/allFood");
				}
			})

			.catch((err) => console.error(err));
	};

	return (
		<div className="mx-auto mt-3 mb-3 flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-200 text-black">
			<form
				onSubmit={handleAddService}
				noValidate=""
				action=""
				className="space-y-5 ng-untouched ng-pristine ng-valid"
			>
				<div>
					<label
						htmlFor="img"
						className="block mb-2 text-sm"
					>
						Photo
					</label>
					<input
						required
						type="text"
						name="img"
						id="img"
						placeholder="Enter Service Photo"
						className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
						data-temp-mail-org="0"
					/>
				</div>

				<div className="space-y-4">
					<div>
						<label
							htmlFor="title"
							className="block mb-2 text-sm"
						>
							Name
						</label>
						<input
							required
							type="text"
							name="title"
							id="title"
							placeholder="Service Name"
							className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
							data-temp-mail-org="0"
						/>
					</div>

					<div>
						<label
							htmlFor="price"
							className="block mb-2 text-sm"
						>
							Price
						</label>
						<input
							required
							type="text"
							name="price"
							id="price"
							placeholder="Enter Price"
							className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
							data-temp-mail-org="0"
						/>
					</div>

					<div>
						<textarea
							required
							type="text"
							name="description"
							className="textarea textarea-secondary w-full"
							placeholder="Description"
						></textarea>
					</div>

					<div className="space-y-2">
						<div>
							<button
								type="submit"
								className="text-xl w-full px-8 py-3 font-semibold rounded-md bg-blue-500 text-white"
							>
								Add
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddService;
