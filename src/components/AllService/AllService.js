import React, { useEffect, useState } from 'react';
import Oneservice from './Oneservice';


const AllService = () => {
    const [allServices, setAllService] = useState([]);
    const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetch("foodservices.json")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
                setAllService(data);
               setLoading(false) 
			});
setLoading(true)
	}, []);

 if (loading) {
		return (
			<div className="w-16 mx-auto m-6 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
		);
 } 


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