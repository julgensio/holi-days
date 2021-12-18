import { useState, useEffect } from 'react';

// Styles
import './styles/TripList.css';

export default function TripList() {
	const [trips, setTrips] = useState([]);

	// * Fetch data when TripList components first runs (use useEffect)
	useEffect(() => {
		fetch('http://localhost:3000/trips')
			.then((response) => response.json())
			.then((json) => setTrips(json));
	}, []);
	console.log(trips);

	return (
		<div className='trip-list'>
			<h4> Trip List</h4>
			<ul>
				{trips.map((trip) => (
					<li key={trip.id}>
						<h3>{trip.title}</h3>
						<p>{trip.price}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
