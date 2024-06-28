import React, { useState } from 'react';
const a = 10;

const RandomNumber = () => {
	const [randomNumber, setRandomNumber] = useState(null);

	const generateRandomNumber = () => {
		const randomNum = Math.floor(Math.random() * a) + 1;

		setRandomNumber(randomNum);
	};

	return (
		<div>
			<h2>Random Number: { randomNumber }</h2>
			<button onClick={ generateRandomNumber }>
				Generate Random Number
			</button>
		</div>
	);
};

export default RandomNumber;