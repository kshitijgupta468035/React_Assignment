import './App.css';

import React from 'react';

import NavBar from './assets/NavBar';

import Footer from './assets/Footer';
import Movies from "./assets/Movies";
import Series from "./assets/Series";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path="/series" component={Series}></Route>
				<Route exact path="/movies" component={Movies}></Route>
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
