import React from 'react';
import { Link } from 'react-router-dom';

const Oneservice = ({singleFood}) => {
     const { title, price, img, description ,_id} = singleFood; ;
     return (
		<div className=" p-6 rounded-md shadow-md bg-white text-black">
			<img
				src={img}
				alt=""
				className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
			/>
			<div className="mt-6 mb-2">
				<h2 className="text-xl font-semibold tracking-wide">
					{title}
				</h2>
				<span className="block text-xl font-medium tracking-widest text-red-500">
					Price: {price}
				</span>
			</div>

			<div>
				{description.length > 100 ? (
					<>
						{description.slice(0, 100) + "..."}

						<div className="card-actions justify-end">
							<Link
								className="btn btn-primary"
								to={`/detailService/${_id}`}
							>
								Details
							</Link>
						</div>
					</>
				) : (
					<>{description}</>
				)}
			</div>
		</div>
     );
};

export default Oneservice;