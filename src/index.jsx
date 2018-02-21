import * as React from 'react';
import * as ReactDOM from 'react-dom';
// https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writting-manually
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Calendar } from './components/Calendar';

ReactDOM.render(
	<Router>
		<div>
			<Navigation/>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/calendar" component={Calendar} />
			  <Route component={Home}/>
			</Switch>
		</div>
	</Router>,
	document.getElementById('romcal')
);
