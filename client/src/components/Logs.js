import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Logs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          logs: [],
          feeling:"",
          because: "",
          
           }
         }
      
        inputText = event => {
          const value = event.target.value;
          const name = event.target.name;
      
          event.preventDefault();
          this.setState({
            [name]: value
          });
        };

        newLog = () => {
          fetch("/users/log", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              because: this.state.because,
              parent_Id: this.props.currentUserId,
              feeling: this.state.feeling
              
            })
          })
            .then(res => res.json())
            .then(response => {
              if (response.message === "Error") {
                return console.error("error");
              }
              console.log(this.props.currentUserId);
            })
            .catch(error => {
              console.log(error);
            }); 
        };
      
  render() {
    return (

      <div class="container">
        <div class="card border-0 shadow my-5">
          <div class="card-body p-5">
            <div className="container">
                <h1 className="display-6 font-weight-lighter text-center">Take a look at the chart below and connect with your feelings!</h1>
                <div><img src="/images/howareyou.png" className="mx-auto d-block"/></div>
                <img src="/images/angry.png" className="p-1 m-1"/>
                <img src="/images/annoyed.png" className="p-1 m-1"/>
                <img src="/images/confused.png" className="p-1 m-1"/>
                <img src="/images/good.png" className="p-1 m-1"/>
                <img src="/images/happy.png" className="p-1 m-1"/>
                <img src="/images/proud.png" className="p-1 m-1"/>
                <img src="/images/sad.png" className="p-1 m-1"/>
                <img src="/images/scared.png" className="p-1 m-1"/>
                <img src="/images/silly.png" className="p-1 m-1"/>
                <img src="/images/shy.png" className="p-1 m-1"/>
                <img src="/images/tired.png" className="p-1 m-1"/>
                <img src="/images/worried.png" className="p-1 m-1"/>
                          
                <div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label className="input-group-text" for="inputGroupSelect01">I'm feeling...</label>
                  </div>
                  <select className="custom-select" id="inputSelect" onChange={this.inputText} name="feeling">
                    <option selected>Choose...</option>
                    <option value="Annoyed">Annoyed</option>
                    <option value="Angry">Angry</option>
                    <option value="Confused">Confused</option>
                    <option value="Good">Good </option>
                    <option value="Happy">Happy </option>
                    <option value="Proud">Proud  </option>
                    <option value="Sad">Sad </option>
                    <option value="Scared">Scared</option>
                    <option value="Silly">Silly</option>
                    <option value="Shy">Shy</option>
                    <option value="Tired">Tired </option>
                    <option value="Worried">Worried</option>
                  </select>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Because</span>
                  </div>
                    <textarea className="form-control" aria-label="With textarea" onChange={this.inputText} name="because"></textarea>
                  </div>
                </div>
                <div>
                  <button type="button" className="btn btn-dark mt-2" onClick={e => this.newLog()} >Submit</button>
                </div>
                <br/>
                 <div>
                    <li className="btn float-left pl-0">
                    <Link to="/logs/history" className="btn btn-info text-left pl-2"> See all your logs</Link>
                    </li>
                </div>
            </div>
        </div>
      </div>
    </div>

    );
  }
}
export default Logs;

