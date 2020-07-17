import React from 'react';

const GeoInput = ({
	placeholder,
	location,
	changeLocation,
	submitLocation,
}) => {
	return (
		<form onSubmit={submitLocation} id={placeholder}>
			<input
				type='text'
				placeholder={`Add your ${placeholder} location`}
				value={location}
				onChange={changeLocation}
			/>
			<button type='submit'>Search</button>
		</form>
	);
};

export default GeoInput;
