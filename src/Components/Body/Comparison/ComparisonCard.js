import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.section`
	max-width: 200px;
	font-size: 1.5rem;
	span {
		text-decoration: underline;
	}
	@media (max-width: 600px) {
		max-width: 90vw;
		margin: 0 auto;
	}
`;

const ComparisonCard = ({ dataCurrentLocation, dataDreamLocation }) => {
	if (!dataCurrentLocation.weather || !dataDreamLocation.weather) {
		return null;
	} else {
		const diffTemp =
			dataCurrentLocation.main.temp - dataDreamLocation.main.temp;

		return (
			<StyledCard>
				{`If you were in your dream destination, ${dataDreamLocation.name}, ${
					dataDreamLocation.sys.country
				}, you would feel ${Math.abs(diffTemp).toFixed(2)} degrees`}{' '}
				<span>{diffTemp > 0 ? 'colder' : 'warmer'}</span>
			</StyledCard>
		);
	}
};

export default ComparisonCard;
