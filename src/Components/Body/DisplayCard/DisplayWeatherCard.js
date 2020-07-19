import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
	width: 400px;
	min-height: 300px;
	border: 1px solid black;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	margin-top: 1rem;
	padding: 1rem;
	@media (max-width: 600px) {
		max-width: 90vw;
		margin: 0 auto;
	}
	#header-card,
	#footer-card {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
	}
	#header-card {
		align-items: center;
	}
`;

const DisplayWeatherCard = ({ dataLocation }) => {
	if (!dataLocation.weather) {
		return null;
	}
	const weather = dataLocation.weather[0];
	const temp = dataLocation.main;
	return (
		<StyledCard>
			<h1>{`${dataLocation.name}, ${dataLocation.sys.country}`}</h1>
			<div id='header-card'>
				<div>
					<img
						src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
						alt='weather'
					/>
				</div>
				<h3>
					{weather.description[0].toUpperCase() + weather.description.slice(1)}
				</h3>
				<h3>{temp.temp} C</h3>
			</div>
			<div id='footer-card'>
				<div id='min-max'>
					<h3>Min / Max</h3>
					<h3>{temp.temp_min}</h3>
					<h3>{temp.temp_max}</h3>
				</div>
				<div id='pressure'>
					<h3>Pressure</h3>
					<h3>{temp.pressure}</h3>
				</div>
				<div id='humidity'>
					<h3>Humidity</h3>
					<h3>{temp.humidity}</h3>
				</div>
			</div>
		</StyledCard>
	);
};

export default DisplayWeatherCard;
