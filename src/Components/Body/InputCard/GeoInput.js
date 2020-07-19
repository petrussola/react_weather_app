import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
	margin-top: 0.5rem;
	max-width: 100%;
	min-height: 2rem;
	input,
	button {
		font-size: 1.5rem;
		padding: 0.5rem;
	}
	input {
		max-width: 75%;
	}
	button {
		max-width: 25%;
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
