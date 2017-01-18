import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBdrFOijHxhA2GvFZkQSN0--kDhln4sboc'

const App = () => {
	return (
		<div><SearchBar/></div>
	);
}

ReactDOM.render( <App />, document.querySelector('.container'));
