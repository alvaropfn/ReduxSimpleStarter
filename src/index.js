import React from 'react';
import ReactDOM from 'react-dom';

//create new component should produce HTML
const App = () =>
{
	return (
		<div>hello</div>
	);
}

//put html genereted into de DOM
ReactDOM.render(
	<App />,
	document.querySelector('.container')
);
