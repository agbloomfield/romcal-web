import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Calendar } from './components/Calendar';

ReactDOM.render(
	<Router>
		<div>
			<Navigation/>
			<div className="container">
				<div className="row">
					<Route exact path="/" component={Home} />
					<Route exact path="/calendar" component={Calendar} />
				</div>
			</div>
		</div>
	</Router>,
	document.getElementById('root')
);
