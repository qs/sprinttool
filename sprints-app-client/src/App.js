import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">SprintTool</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <LinkContainer to="/today/">
                  <NavItem>Today</NavItem>
                </LinkContainer>
                <LinkContainer to="/sprint/">
                  <NavItem>Sprint</NavItem>
                </LinkContainer>
                <LinkContainer to="/archive/">
                  <NavItem>Archive</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
