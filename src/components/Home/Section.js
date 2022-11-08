import React from 'react';
import { CiDeliveryTruck } from "react-icons/ci";
import { HiCurrencyDollar } from "react-icons/hi";
import { RiSecurePaymentLine, Ri24HoursLine } from "react-icons/ri";
import img1 from '../../assets/img2.jpg'
const Section = () => {
    return (
		<div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mt-4 bg-gray-100">
			<div className="relative">
				<div className="grid gap-12 row-gap-8 lg:grid-cols-2">
					<div>
						<img
							className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
							src={img1}
							alt=""
						/>
					</div>

					<div>
						<p className="text-2xl text-black font-bold">
							Who we are?
						</p>

						<h1 className="text-3xl text-orange-400">
							Take a look at the benefits we
							offer you
						</h1>

						<div className="grid gap-12 row-gap-5 md:grid-cols-2">
							<div className="relative">
								<div className="relative">
									<div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-orange-500 text-white">
										<CiDeliveryTruck></CiDeliveryTruck>
									</div>
									<h6 className="mb-2 text-amber-500  font-semibold leading-5">
										We do not
										charge
										delivery
									</h6>
									<p className="text-sm text-gray-900">
										Our
										purpose is
										to make
										food
										accessible
										to
										everyone.
									</p>
								</div>
							</div>

							<div>
								<div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-green-500 text-white">
									<HiCurrencyDollar></HiCurrencyDollar>
								</div>
								<h6 className="mb-2 text-amber-500   font-semibold leading-5">
									Return & Refund
								</h6>
								<p className="text-sm text-gray-900">
									If the food is
									not up to your
									standard, the
									money will be
									refunded.
								</p>
							</div>

							<div>
								<div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-amber-400">
									<RiSecurePaymentLine></RiSecurePaymentLine>
								</div>
								<h6 className="mb-2 text-amber-400 font-semibold leading-5">
									Secure Payment
								</h6>
								<p className="text-sm text-gray-900">
									You will be able
									to pay after
									receiving the
									food. You can
									also make secure
									payments to
									Bikash.
								</p>
							</div>
							<div>
								<div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-blue-600 text-white">
									<Ri24HoursLine></Ri24HoursLine>
								</div>
								<h6 className="mb-2 text-amber-400 font-semibold leading-5">
									Delivery Support
								</h6>
								<p className="text-sm text-gray-900">
									24/7 hours food
									delivery except
									Friday and
									Saturday.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
};

export default Section;