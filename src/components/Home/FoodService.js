import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const FoodService = () => {

	const [foodServices, setFoodService] = useState([]);
	
	useEffect(() => {
		fetch("foodservices.json")
			.then((res) => res.json())
			.then((data) => {
			console.log(data)
				setFoodService(data)
			});
		
	}, []);

    return (
		<div>
			<div className="text-center m-7">
				<p className="text-3xl font-bold text-orange-500">
					what we serve
				</p>
				<h2 className="lg:text-5xl md:text-5xl sm:text-4xl font-semibold">
					Just order at home and <br /> we
					<span className="text-amber-300">
						will deliver
					</span>
				</h2>
				<p className='text-xl'>
					We will deliver your food within hours of
					ordering.
				</p>
			</div>

			<div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    foodServices.map(foodService => <SingleService
                    
                    foodService ={foodService}
                    ></SingleService>)    
            }
			</div>
		</div>
    );
};

export default FoodService;