import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyDIOwhX2FyDTGxpWqGdbY5OMGsnQG_1czI';

// Create a new component. It should produce some HTML
const App = () => {
	return (<div>
		<SearchBar />
	</div>;
	);
}


// Take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));