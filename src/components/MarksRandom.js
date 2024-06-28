/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';
const a = 101;

const getRandomMarks = () => {
// Generate a random mark between 0 and 100
	Math.floor(Math.random() * a);
};

const MarksRandom = () => {
	const [studentMarks, setStudentMarks] = useState([
		{ name: 'Student 1', marks: 90 },
		{ name: 'Student 2', marks: 0 },
		{ name: 'Student 3', marks: 0 },
		// Add more students as needed
	]);

	const assignRandomMarks = () => {
		// Assign random marks to each student
		const updatedMarks = studentMarks.map((student) => ({
			...student,
			marks: getRandomMarks(),
		}));

		setStudentMarks(updatedMarks);
	};

	return (
		<div>
			<h1>Student Marks</h1>
			<button onClick={ assignRandomMarks }>Assign Random Marks</button>
			<ul>
				{ studentMarks.map((student, index) =>
					<li key={ index }>
						{ student.name }: { student.marks }
					</li>) }
			</ul>
		</div>
	);
};

export default MarksRandom;
