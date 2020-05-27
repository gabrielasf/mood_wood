import React, { Component } from "react";
import Register from "./components/Register";
import History from "./components/History";
import Logs from "./components/Logs";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUserId: null,
    };
  }

  getUserId = (id) => {
    this.setState({
      currentUserId: id,
    });
  };

  render() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2" id="navbarhome">
        <span class="navbar-brand nav-link mb-0 bg-light h3">Mood Wood</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText"></div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/logs" className="nav-link">Create a Log</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
          </ul>
          
        </nav>
        
        <Switch>
          <Route path="/register" component={Register}>
            <Register getUserId={this.getUserId}/>
          </Route>
           <Route path="/logs/history" component={History}>
            <History currentUserId={this.state.currentUserId}/>
          </Route>
          <Route path="/logs" component={Logs}>
            <Logs currentUserId={this.state.currentUserId} />
          </Route>
          <Route path="/about" component={About}>
            <About  />
          </Route>
          <Route path="/" component={Home}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
}