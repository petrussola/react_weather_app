import React from 'react';

// components
import GeoInput from './GeoInput';

const LocationCard = ({
	placeholder,
	location,
	changeLocation,
	submitLocation,
}) => {
	return (
		<div>
			<GeoInput
				placeholder={placeholder}
				location={location}
				changeLocation={changeLocation}
				submitLocation={submitLocation}
			/>
		</div>
	);
};

export default LocationCard;
