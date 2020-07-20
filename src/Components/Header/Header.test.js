import React from 'react';
import * as rtl from '@testing-library/react';
import Header from './Header';

let header;

beforeEach(() => {
	rtl.cleanup();
	header = rtl.render(<Header />);
});

describe('Header component', () => {
	it('renders title', () => {
		const title = header.queryByText(/Dream Weather App/i);
		expect(title).toBeInTheDocument();
	});
	it('renders subtitle', () => {
		const subtitle = header.queryByText(
			/Check the weather you could be enjoying in your dream destination/i
		);
		expect(subtitle).toBeInTheDocument();
	});
});
