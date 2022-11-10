import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Reviewtable from "./Reviewtable";

const Review = () => {
	useTitle("My Reviews");
	const { user, logOut } = useContext(AuthContext);
	const [review, setReview] = useState([]);

	useEffect(() => {
		fetch(
			`https://services-server-anisa6121.vercel.app/allReviews?email=${user?.email}`,
			{
				// headers: {
				// authorization: `Bearer ${localStorage.getItem("ourService")}`,
				// },
			}
		)
			.then((res) => {
				if (res.status === 401 || res.status === 403) {
					logOut();
				}
				return res.json();
			})

			.then((data) => {
				console.log(data);
				setReview(data);
			})
			.catch((err) => console.log(err));
	}, [user?.email, logOut]);

	if (review.length === 0) {
		return (
			<h2 className="text-5xl m-24 text-center text-amber-400">
				No reviews were Found
			</h2>
		);
	}

	const handleDelete = (id) => {
		const proceed = window.confirm(
			"Are you sure, you want to cancel this order"
		);
		if (proceed) {
			fetch(
				`https://services-server-anisa6121.vercel.app/allReviews/${id}`,
				{
					method: "DELETE",

					headers: {
						authorization: `Bearer ${localStorage.getItem(
							"ourService"
						)}`,
					},
				}
			)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);

					if (data.deletedCount > 0) {
						toast.success("deleted successfully");
						const remaining = review.filter(
							(comment) => comment._id !== id
						);
						setReview(remaining);
					}
				});
		}
	};

	return (
		<div>
			<div className="overflow-x-auto w-full mb-24 ">
				<table className="table w-full">
					<thead>
						<tr>
							<th>Image</th>
							<th>Name</th>
							<th>Price</th>
							<th>Review</th>

							<th>Delete</th>
							<th>Update</th>
						</tr>
					</thead>

					<tbody>
						{review.map((oneReview) => (
							<Reviewtable
								handleDelete={
									handleDelete
								}
								key={oneReview._id}
								oneReview={oneReview}
							></Reviewtable>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Review;
