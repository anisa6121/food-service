import React from "react";

const RightSide = ({ data }) => {
	console.log(data);
	return (
		<div className="flex-grow">
			<h2 className="text-gray-900 text-lg title-font font-medium mb-3">
				{data.email}
			</h2>
			<p className="leading-relaxed text-base">{data.review}</p>
		</div>
	);
};

export default RightSide;
