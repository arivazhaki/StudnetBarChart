const min = 4;
const max = 10;
const hexBase = 16;

const getRandomColor = () => Math.random().toString(hexBase)
	.substring(min, max);

export default getRandomColor;