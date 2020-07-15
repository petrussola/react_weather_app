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

const Body = () => {
	return (
		<StyledSection>
			<LocationCard />
			<LocationCard />
		</StyledSection>
	);
};

export default Body;
