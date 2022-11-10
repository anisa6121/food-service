import React, { useEffect, useState } from 'react';

const Reviewtable = ({ oneReview, handleDelete }) => {
	const { serviceName, review, Price, serviceId, _id } = oneReview;

	const [reviewService, setReviewService] = useState({});
	useEffect(() => {
		fetch(`http://localhost:5000/allServices/${serviceId}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setReviewService(data);
			});
	}, [serviceId]);

	return (
		<tr>
			<td>
				<div className="flex items-center space-x-3 ">
					<div className="avatar">
						<div className="rounded w-30 h-28">
							{reviewService?.img && (
								<img
									src={
										reviewService.img
									}
									alt="Avatar Tailwind CSS Component"
								/>
							)}
						</div>
					</div>
				</div>
			</td>

			<td>{serviceName}</td>
			<td>{Price}</td>

			<td>{review}</td>

			<th>
				<label>
					<button
						onClick={() => handleDelete(_id)}
						className="btn  btn-error"
					>
						X
					</button>
				</label>
			</th>

			<th>
				<label>
					<button
						// onClick={() => handleDelete(_id)}
						className="btn btn-info"
					>
						Edit
					</button>
				</label>
			</th>
		</tr>
	);
};

export default Reviewtable;