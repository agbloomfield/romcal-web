import React, {Component} from 'react';
import { Route, RouteHandler, Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';

export class Navigation extends Component {

	constructor(props) {
		super(props);
	}

	// https://github.com/react-bootstrap/react-router-bootstrap
	// Wrap your React Bootstrap element in a <LinkContainer> to make it behave like a React Router <Link>
	// <LinkContainer> accepts same parameters as React Router's <NavLink>
	render() {
		return (
			<Navbar fixedTop >
		    <Navbar.Header>
				  <Navbar.Brand>
						<a href="/">Romcal</a>
				  </Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<LinkContainer exact to="/">
				    <NavItem eventKey={1}>Home</NavItem>
				  </LinkContainer>
					<LinkContainer exact to="/calendar">
				    <NavItem eventKey={2}>Calendar</NavItem>
				  </LinkContainer>
				</Nav>
			</Navbar>
		);
	}	
}