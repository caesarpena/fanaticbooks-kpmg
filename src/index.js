import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
//import App from './components/app';

import reducers from './reducers';
import Home from './components/home';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<BrowserRouter>
  		<div>
	  		<Switch>
	  			<Route path="/" component={Home} />
	  		</Switch>
  		</div>
  	</BrowserRouter>
  </Provider>
  , document.querySelector('.root'));
