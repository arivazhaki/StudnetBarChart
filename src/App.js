import { React } from 'react';
import './App.scss';
import HorizontalBarChart from './components/HorizontalBarChart';

const App = (context) =>
	<div className="App">
		<h1>Horizontal Bar Chart Example</h1>
		<HorizontalBarChart { ...context }/>
	</div>
;

export default App;
