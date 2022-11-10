import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Reviewtable from './Reviewtable';

const Review = () => {

    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:5000/allReviews?email=${user?.email}`)


            .then(res => res.json())
            .then(data => {
                console.log(data);
            setReview(data);
        })
.catch(err => console.log(err))

    },[user?.email])
  
	
    if (review.length === 0) {
        return <h2 className="text-5xl m-24 text-center text-amber-400">No reviews were Found</h2>;
		
     }
    
  
	

    return (
		<div>
            
			<div className="overflow-x-auto w-full mb-24 ">
				<table className="table w-full">
					<thead>
						<tr>
							<th>Image</th>
							<th>Name</th>
							<th>Price</th>
							<th>Review</th>

							<th>Delete</th>
							<th>Update</th>
						</tr>
					</thead>

					<tbody>
						{review.map((oneReview) => (
							<Reviewtable
								key={oneReview._id}
								oneReview={oneReview}
							></Reviewtable>
						))}
					</tbody>
				</table>
			</div>
		</div>
    );
};

export default Review;