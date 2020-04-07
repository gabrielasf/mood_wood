import React from "react";
import Register from "./components/Register";
import History from "./components/History";
import Logs from "./components/Logs";


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
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Sign up!</Link>
            </li>
            <li>
              <Link to="/logs">Create a Log</Link>
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
            <History  />
          </Route>
          <Route path="/logs" component={Logs}>
            <Logs  />
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
  <div>
    <img src="https://media.giphy.com/media/BqJc5y7Oq6wPS/giphy.gif" class="rounded mx-auto d-block" alt="logo"/>
    <h1 className="display-4 text-center">How are you felling today?</h1>
    </div>
   
  );
}

