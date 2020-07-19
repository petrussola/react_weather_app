import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.section`
	max-width: 200px;
	font-size: 1.5rem;
	span {
		text-decoration: underline;
	}
`;

const ComparisonCard = ({ dataCurrentLocation, dataDreamLocation }) => {
	if (!dataCurrentLocation.weather && !dataDreamLocation.weather) {
		return null;
	}

	const diffTemp = dataCurrentLocation.main.temp - dataDreamLocation.main.temp;

	return (
		<StyledCard>
			{`If you were in your dream destination, ${
				dataDreamLocation.name
			}, you would be ${Math.abs(diffTemp).toFixed(2)} degrees`}{' '}
			<span>{diffTemp > 0 ? 'colder' : 'hotter'}</span>
		</StyledCard>
	);
};

export default ComparisonCard;
