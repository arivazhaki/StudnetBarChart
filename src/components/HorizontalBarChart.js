/* eslint-disable max-lines-per-function */
import { React } from 'react';
import RandomGeneration from '../services/RandomGeneration';
import getRandomColor from '../services/getRandomColor';

const HorizontalBarChart = (context) => {
	const { config: { subjects }} = context;

	const updatedMarks = subjects.map((subject) => ({
		...subject,
		marks: RandomGeneration.randomPassedCount(),
	}));

	return <div className="barChart">

		{ updatedMarks.map((subject, index) =>
			<div
				key={ index }
				style={ { display: 'flex' } }
			>
				<div className="subject">{ subject.subjectName }</div>
				<div
					className="passedCountBar"
					style={ {
						width: `${ subject.marks }%`,
						backgroundColor: `#${ getRandomColor() }`,
					} }
				/>
				{ subject.marks }
			</div>) }
	</div>;
};

export default HorizontalBarChart;
