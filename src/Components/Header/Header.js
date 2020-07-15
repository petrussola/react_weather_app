import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #000;
    padding: 1rem;
    max-height: 100px;
	h1, h3 {
		margin: 0
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<h1>Dream Weather App</h1>
			<h3>Check the weather you could be enjoying in your dream destination</h3>
		</StyledHeader>
	);
};

export default Header;
