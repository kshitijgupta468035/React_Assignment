import './App.css';

import React from 'react';

import NavBar from './components/NavBar';

import Footer from './components/Footer';
import Movies from "./components/Movies";
import Series from "./components/Series";

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
