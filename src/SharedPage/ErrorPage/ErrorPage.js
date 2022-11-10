import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	return (
		<>
			<div className="flex flex-col min-h-[700px] justify-center items-center">
				<h1 className="text-4xl">OH NO, PAGE NOT FOUND</h1>

				<br />

				{error && (
					<div>
						<p className="text-lime-500 text-7xl">
							{error.statusText ||
								error.message}
						</p>
						<p>{error.status}</p>
					</div>
				)}
			</div>
		</>
	);
};

export default ErrorPage;
