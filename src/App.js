import { React } from 'react';
import './App.scss';
import HorizontalBarChart from './components/HorizontalBarChart';
import RandomNumber from './components/RandomNumber';
import BarChatRandom from './components/BarChartRandom';

const App = (context) =>
	<div className="App">
		<h1>Horizontal Bar Chart Example</h1>
		<HorizontalBarChart { ...context }/>
		<RandomNumber/>
		<BarChatRandom/>
	</div>
;

export default App;
