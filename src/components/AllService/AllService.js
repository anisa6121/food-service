import React, { useEffect, useState } from 'react';
import Oneservice from './Oneservice';


const AllService = () => {
    const [allServices, setAllService] = useState([]);
    
	useEffect(() => {
		fetch("foodservices.json")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setAllService(data);
			});
	}, []);




    return (
		<div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{allServices.map((singleFood) => (
                <Oneservice
                    
                    singleFood={singleFood}></Oneservice>
			))}
		</div>
    );
};

export default AllService;