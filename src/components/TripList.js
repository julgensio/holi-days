import { useState, useEffect, useCallback } from 'react';

// Styles
import './styles/TripList.css';

export default function TripList() {
	const [trips, setTrips] = useState([]);
	const [url, setUrl] = useState('http://localhost:3000/trips');

	// * Create cached of fetchTrips for not run again
	// ! FetchTrips is has a different position in memory thats why it runs multiple times if your new using the usecallback function
	const fetchTrips = useCallback(async () => {
		const response = await fetch(url);
		const json = await response.json();
		setTrips(json);
	}, [url]); // * Check if the url is updated

	// * Fetch data when TripList components first runs (use useEffect)
	// ! Function runs at the start and when the dependency [] value changes
	useEffect(() => {
		fetchTrips();
	}, [fetchTrips]); // * triggerd when url changes a new fetchTrip function is generated
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
