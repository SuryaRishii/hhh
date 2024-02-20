import React, { useState, useEffect } from 'react';

function Countries() {

	const [countries, setCountries] = useState([]);

	useEffect(() => {

		const fetchCountries = async () => {

			try {

				const response = await fetch('https://restcountries.com/v3.1/all');

				if (!response.ok) {

					throw new Error('Failed to fetch countries');

				}
				const data = await response.json();

				setCountries(data);

			} catch (error) {

				console.error('Error fetching countries:', error);

			}

		};
		fetchCountries();

	}, []);

	return (

		<div>

			<h1>List of Countries</h1>

			<ol>

				{countries.map((country) => (

					<li>{country.name.common}</li>

				))}

			</ol>

		</div>

	);

}

export default Countries;