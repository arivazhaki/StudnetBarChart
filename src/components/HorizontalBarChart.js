import { React } from 'react';

const HorizontalBarChart = (context) => {
	const { config: { subjects }} = context;

	return <div className="barChart">

		{ subjects.map((subject, index) =>
			<div
				key={ index }
				style={ { display: 'flex' } }
			>
				<div className="subject">{ subject.subjectName }</div>
				<div
					className="passedCountBar"
					style={ { width: `${ subject.passedCount }%` } }
				/>
				{ subject.passedCount }
			</div>) }
	</div>;
};

export default HorizontalBarChart;
