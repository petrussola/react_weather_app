import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
	width: 400px;
	height: 300px;
	border: 1px solid #fff;
	border-radius: 10px;
	background-color: red;
`;

const DisplayWeatherCard = ({ dataLocation }) => {
	if (!dataLocation.weather) {
		return null;
	}
	const weather = dataLocation.weather[0];
	const temp = dataLocation.main;
	return (
		<StyledCard>
			<h1>{dataLocation.name}</h1>
			<h3>
				{weather.description[0].toUpperCase() + weather.description.slice(1)}
			</h3>
			<div>
				<img
					src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
					alt='weather'
				/>
			</div>
			<h3>{temp.temp} C</h3>
		</StyledCard>
	);
};

export default DisplayWeatherCard;
