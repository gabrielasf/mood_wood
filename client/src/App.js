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

// function History() {

//   return (
//   <div>
//     <h1>History</h1>
//      </div>
   
//   );
// }

// function Register() {
//   return (
//   <div>
//   <h2>Sign up</h2>  

//   <div class="input-group">
//   <div class="input-group-prepend">
//     <span class="input-group-text" id="">First and last name</span>
//   </div>
//   <input type="text" class="form-control"/>
//   <input type="text" class="form-control"/>
// </div>
  
// <div class="input-group mb-3">
//   <div class="input-group-prepend">
//     <span class="input-group-text" id="basic-addon1">your@email.com</span>
//   </div>
//   <input type="text" class="form-control"  aria-label="email" aria-describedby="basic-addon1"/>
// </div>

// <div class="input-group mb-3">
//   <div class="input-group-prepend">
//     <span class="input-group-text" id="inputGroup-sizing-default">UserName</span>
//   </div>
//   <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
// </div>

// <div class="input-group mb-3">
//   <div class="input-group-prepend">
//     <span class="input-group-text" id="inputGroup-sizing-default">Date of Birth</span>
//   </div>
//   <input type="data" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
// </div>
// <div>
// <button type="button" class="btn btn-outline-dark">Submit</button>
// </div>

//   </div>
//   );
// }

// function Logs() {
//   return (
//   <div>
//   <h2>Your Logs</h2>
//   <div>
//       <div className="input-group mb-3">
//       <div className="input-group-prepend">
//       <label className="input-group-text" for="inputGroupSelect01">I'm feeling...</label>
//     </div>
//     <select className="custom-select" id="inputSelect"  name="felling">
//     <option selected>Choose...</option>
//     <option value="Angry">Angry</option>
//     <option value="Confused">Confused</option>
//     <option value="Good">Good </option>
//     <option value="Happy">Happy </option>
//     <option value="Proud">Proud  </option>
//     <option value="Proud">Sad </option>
//     <option value="Shy">Shy </option>
//     <option value="Tired">Tired </option>
//     </select>
//     </div>
//     <div className="input-group">
//     <div className="input-group-prepend">
//       <span className="input-group-text">Because</span>
//     </div>
//       <textarea className="form-control" aria-label="With textarea" name="because"></textarea>
//     </div>
//     </div>
//     <div>
//       <button type="button" className="btn btn-outline-dark m-2" >Submit this Feeling</button>
//     </div>
//     <div>
//       <button type="button" class="btn btn-info" >Your Logs</button>
//     </div>
//   </div>
    
//   );
// }