import React from 'react';
import styled from 'styled-components';

//components
import LocationCard from './LocationCard/LocationCard';

const StyledSection = styled.section`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
	align-items: center;
`;

const Body = ({
	currentLocation,
	dreamLocation,
	changeCurrentLocation,
	changeDreamLocation,
	submitLocation,
}) => {
	return (
		<StyledSection>
			<LocationCard
				placeholder='current'
				location={currentLocation}
				changeLocation={changeCurrentLocation}
				submitLocation={submitLocation}
			/>
			<LocationCard
				placeholder='dream'
				location={dreamLocation}
				changeLocation={changeDreamLocation}
				submitLocation={submitLocation}
			/>
		</StyledSection>
	);
};

export default Body;
