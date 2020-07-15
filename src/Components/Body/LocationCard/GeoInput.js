import React, { useState } from 'react';

const GeoInput = () => {
	const [location, setLocation] = useState();

	// change handler when user writes location
	const changeLocation = (e) => {
		setLocation(e.target.value.toLowerCase());
	};

	// submit handler when User submits location
	const submitLocation = (e) => {
		e.preventDefault();
	};
	return (
		<form onSubmit={submitLocation}>
			<input
				type='text'
				placeholder='Select location'
				onChange={changeLocation}
			/>
			<button type='submit'>Search</button>
		</form>
	);
};

export default GeoInput;
