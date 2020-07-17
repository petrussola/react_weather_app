import './App.css';
// components
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';

import React, { useState } from 'react';
import axios from 'axios';
require('dotenv').config();

// env variables
const baseApi = process.env.REACT_APP_BASE_API;
const apiKey = process.env.REACT_APP_API_KEY;

function App() {
	// state
	const [currentLocation, setCurrentLocation] = useState('');
	const [dataCurrentLocation, setDataCurrentLocation] = useState({});
	const [dreamLocation, setDreamLocation] = useState('');
	const [dataDreamLocation, setDataDreamLocation] = useState({});

	// on change location inputs
	const changeCurrentLocation = (e) => {
		setCurrentLocation(e.target.value.toLowerCase());
	};
	const changeDreamLocation = (e) => {
		setDreamLocation(e.target.value.toLowerCase());
	};

	// on submit location inputs
	const submitLocation = async (e) => {
		e.preventDefault();
		try {
			if (e.target.id === 'current') {
				const res = await axios.get(
					`${baseApi}?q=${currentLocation}&appid=${apiKey}&units=metric`
				);
				setDataCurrentLocation(res.data);
			} else {
				const res = await axios.get(
					`${baseApi}?q=${dreamLocation}&appid=${apiKey}&units=metric`
				);
				setDataDreamLocation(res.data);
			}
		} catch (error) {
			console.log(error);
		} finally {
			// clear input fields
			setCurrentLocation('');
			setDreamLocation('');
		}
	};

	return (
		<div className='App'>
			<Header />
			<Body
				currentLocation={currentLocation}
				dreamLocation={dreamLocation}
				changeCurrentLocation={changeCurrentLocation}
				changeDreamLocation={changeDreamLocation}
				submitLocation={submitLocation}
			/>
		</div>
	);
}

export default App;
