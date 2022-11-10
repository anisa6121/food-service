import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ foodService }) => {

    const { title, price, img, description , _id} = foodService;
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
				{description.length > 200 ? (
					<>
						{description.slice(0, 200) + "..."}
						
					</>
				) : (
					<>{description}</>
				)}
			</div>
		</div>
    );
};

export default SingleService;