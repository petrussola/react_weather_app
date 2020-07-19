import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
	margin-top: 0.5rem;
	max-width: 100%;
	min-height: 2rem;
	@media (max-width: 600px) {
		max-width: 90vw;
		margin: 1rem auto 0.5rem auto;
	}
	input,
	button {
		font-size: 1.5rem;
		padding: 0.5rem;
		border-radius: 4px;
		@media (max-width: 600px) {
			font-size: 1rem;
		}
	}
	input {
		width: 75%;
	}
	button {
		width: 25%;
	}
`;

const GeoInput = ({
	placeholder,
	location,
	changeLocation,
	submitLocation,
}) => {
	return (
		<StyledForm onSubmit={submitLocation} id={placeholder}>
			<input
				type='text'
				placeholder={`Add your ${placeholder} location`}
				value={location}
				onChange={changeLocation}
			/>
			<button type='submit'>Search</button>
		</StyledForm>
	);
};

export default GeoInput;
