import React from "react";
import Register from "./components/Register";
import History from "./components/History";
import Logs from "./components/Logs";
import About from "./components/About";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
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

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register" component={Register}>
            <Register />
          </Route>
           <Route path="/logs/history" component={History}>
            <History/>
          </Route>
          <Route path="/logs" component={Logs}>
            <Logs  />
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

function Home() {

  return (
    <div className="container">
  <div className="card border-0 shadow my-3">
    <div className="card-body p-3" id="contHome">
    <div>
    <img src="https://media.giphy.com/media/3ov9jEp7AkzKJf462Y/giphy.gif" className="p-3 m-2 rounded mx-auto float-left" id="gif" alt="logo"/>
    </div>
    <img src="images/how1.png" alt="how" className="float-right-align p-1 mb-1 mt-3"/>
    <img src="images/areyou.png" alt="areyou" className="mb-1 p-1"/>
    <img src="images/feeling.png" alt="feeling" className="mb-1 p-1"/>
    
    </div> 
    </div>
    </div>
  

  );
}

    