
import React, { useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import { setAuthToken } from "../../SharedPage/Token/Token";

const Login = () => {
	useTitle("Login");
	const [userEmail, setUserEmail] = useState("");

	const { signIn, resetPassword, googleSignIn } = useContext(AuthContext);

	const [error, setError] = useState("");
	const navigate = useNavigate();

	const location = useLocation();

	const from = location.state?.from?.pathname || "/";

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		console.log(email, password);

		signIn(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				form.reset();
				setError("");

				// get TOKEN
				const createUser = {
					email: user.email,
				};
				console.log(createUser);
				fetch(
					"https://services-server-anisa6121.vercel.app/jwt",
					{
						method: "POST",
						headers: {
							"content-type":
								"application/json",
						},

						body: JSON.stringify(createUser),
					}
				)
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						localStorage.setItem(
							"ourService",
							data.token

						);
						navigate(from, { replace: true });
						
					});
			})

			.catch((error) => {
				console.log(error);
				setError(error.message);
			});
	};

	// resset password

	const handleReset = () => {
		resetPassword(userEmail)
			.then(() => {
				toast.success(
					"Reset link has been sent,  check your email"
				);
			})
			.catch((error) => toast.error(error.message));
	};

	// Google sign In

	const handleGoogleSignIn = () => {
		googleSignIn()
			.then((result) => {
				const user = result.user;
				console.log(user);
				setAuthToken(user);
			})

			.catch((er) => console.log(er));
	};

	return (
		<div className="mx-auto mt-4 w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-white text-black mb-3">
			<h2 className="mb-3 text-3xl font-semibold text-center">
				Login
			</h2>

			<form
				onSubmit={handleSubmit}
				noValidate=""
				action=""
				className="space-y-8 ng-untouched ng-pristine ng-valid"
			>
				<div className="space-y-4">
					<div className="space-y-2">
						<label
							for="email"
							className="block text-sm"
						>
							Email address
						</label>

						<input
							onBlur={(event) =>
								setUserEmail(
									event.target
										.value
								)
							}
							required
							type="email"
							name="email"
							id="email"
							placeholder="Enter Your Email"
							className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-white text-black"
							data-temp-mail-org="0"
						/>
					</div>

					<div className="space-y-2">
						<label
							for="email"
							className="block text-sm"
						>
							Password
						</label>

						<input
							required
							type="password"
							name="password"
							id="password"
							placeholder="Enter Password"
							className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-white text-black"
							data-temp-mail-org="0"
						/>
					</div>
				</div>
				<button
					type="submit"
					className="w-full  px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900"
				>
					Log In
				</button>

				<div className="flex justify-between">
					<p className="text-sm">Forgot password?</p>

					<button
						onClick={handleReset}
						className="text-xs hover:underline"
					>
						Please reset your password
					</button>
				</div>
			</form>

			<div className="flex items-center w-full my-4">
				<hr className="w-full" />
				<p className="px-3">OR</p>
				<hr className="w-full" />
			</div>

			<div className="my-6 space-y-4">
				<button
					onClick={handleGoogleSignIn}
					aria-label="Login with Google"
					type="button"
					className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 32 32"
						className="w-5 h-5 fill-current"
					>
						<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
					</svg>
					<p>Login with Google</p>
				</button>
			</div>

			<div className="flex justify-between">
				<p className="text-sm">New to this Website</p>

				<Link
					to="/register"
					className="text-xs hover:underline mb-3"
				>
					Please Register
				</Link>
			</div>

			<p className="text-lg font-bold text-black">{error}</p>
		</div>
	);
};

export default Login;
