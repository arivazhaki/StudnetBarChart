/* eslint-disable max-lines-per-function */
/* eslint-disable no-undef */
import React, { useState } from 'react';

const BarChatRandom = () => {
	const [userName, setUserName] = useState('');
	const [passWord, setPassword] = useState('');

	const clickChange = () => {
		setUserName('');
		setPassword('');
		setEmail(`Welcome ${ userName }`);
	};

	const ex = { margin: '30px' };

	return <div>
		<h1> Welcome To Student BarChat  </h1>
		<label htmlFor="mailId">Science</label>
		<input
			type="text"
			value={ userName }
			onChange={ (event) =>
				setUserName(event.target.value) }
		/><br/>
		<div><div style={ ex }>
			<label htmlFor="enterpassword">Maths</label>
			<input
				type="text"
				value={ passWord }
				onChange={ (event) =>
					setPassword(event.target.value) }
			/>
		</div>
		</div>
		<input
			type="submit"
			value="
				 Login  "
			onClick={ clickChange }
		/><br/>
		<div>{ userName }</div>
		<button
			type="button"
			onClick={ () => setPassword('blue') }
		>Blue</button>
	</div>;
};

export default BarChatRandom;
