import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage';

export default function BasicExample() {
  return (
    <Router>
      <div>
        
        <hr />

        {}
        <Switch>
          <Route exact path="/" component={LandingPage}>
          
          </Route>
          <Route path="/login" component={LoginPage}>
          </Route>
          <Route path="/register" component={RegisterPage}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
