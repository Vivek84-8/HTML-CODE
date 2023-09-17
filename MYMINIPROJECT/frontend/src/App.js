import React, { Component } from 'react';
import TodoList from './components/TodoList';
// import 'bootstrap/dist/css/bootstrap.css';
import TodoInput from './components/TodoInput';
import Navbar from './components/Navbar';
import TenTodos from './components/TenTodos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { store } from './reducers/store';

function App() {
	return (

		<BrowserRouter>
			<Provider store={store}>
				<div className="App">
					<Navbar />
					<TenTodos />
					<Routes>
						<Route exact path='/' component={TodoList} />
						<Route path='/add' component={TodoInput} />
						<Route path='/list' component={TodoList} />
					</Routes>
				</div>
			</Provider>
		</BrowserRouter>


	);
}

export default App;