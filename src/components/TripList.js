import { useState, useEffect } from 'react';

// Styles
import './styles/TripList.css';

export default function TripList() {
	const [trips, setTrips] = useState([]);
	const [url, setUrl] = useState('http://localhost:3000/trips');

	// * Fetch data when TripList components first runs (use useEffect)
	// ! function runs at the start and when the dependency [] value changes
	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((json) => setTrips(json));
	}, [url]); // * Rerun the new data
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
			<div className='filters'>
				<button
					onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}
				>
					European Trips
				</button>
				<button onClick={() => setUrl('http://localhost:3000/trips')}>
					All Trips
				</button>
			</div>
		</div>
	);
}
