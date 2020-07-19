import React from 'react';
import styled from 'styled-components';

//components
import GeoInput from './InputCard/GeoInput';
import DisplayWeatherCard from './DisplayCard/DisplayWeatherCard';
import ComparisonCard from './Comparison/ComparisonCard';

const StyledBody = styled.section`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
	align-items: flex-start;
`;

const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

const Body = ({
	currentLocation,
	dreamLocation,
	changeCurrentLocation,
	changeDreamLocation,
	submitLocation,
	dataCurrentLocation,
	dataDreamLocation,
}) => {
	return (
		<StyledBody id='inputs'>
			<StyledSection>
				<GeoInput
					placeholder='current'
					location={currentLocation}
					changeLocation={changeCurrentLocation}
					submitLocation={submitLocation}
				/>
				<DisplayWeatherCard dataLocation={dataCurrentLocation} />
			</StyledSection>
			<StyledSection>
				<GeoInput
					placeholder='dream'
					location={dreamLocation}
					changeLocation={changeDreamLocation}
					submitLocation={submitLocation}
				/>
				<DisplayWeatherCard dataLocation={dataDreamLocation} />
			</StyledSection>
			<StyledSection>
				<ComparisonCard
					dataCurrentLocation={dataCurrentLocation}
					dataDreamLocation={dataDreamLocation}
				/>
			</StyledSection>
		</StyledBody>
	);
};

export default Body;
