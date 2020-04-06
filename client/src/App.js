import React, { Component } from "react";
//import {Line} from "react-chartjs-2";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      logs: [],
      felling:"",
      because: ""
       }
    
  }


  componentDidMount() {
    this.getLog();
  }

  getLog = () => {
    fetch(`/users/emergency`)
      .then(response => response.json())
      .then(response => {
        this.setState({ students: response });
      });
  };

  inputText = event => {
    const value = event.target.value;
    const name = event.target.name;

    event.preventDefault();
    this.setState({
      [name]: value
    });
  };

  newLog = () => {
    fetch("/users/emergency", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        felling: this.state.felling,
        because: this.state.because
      })
    })
      .then(res => res.json())
      .then(response => {
        if (response.message === "Error") {
          return console.error("error");
        }
        this.getLog();
      })
      .catch(error => {
        console.log(error);
      });
  };

  deleteLog = i => {
    fetch(`/users/emergency/${i}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(response => {
        if (response.message === "Error") {
          return console.error("error");
        }
        this.getLog();
      })
      .catch(error => {
        console.log(error);
      });
  };

  //NEED TO ACCES THE USER IN THE DATABASE FOR THE GREETING
  //NEED TO SUBMIT THE LOG WITHOUT A REGISTERED USER
  //NEED TO DISPLAY THE LOGS 

  render() {
    return (
    <div>
    <div className="card border-info mb-4 text-center col-sm-4 position-center">
    <div>
    <img src="images/logomw.png" alt="logo" className="img-thumbnail"/>
    </div>
    <div className="card-body">
    <h5 className="card-title">How are you?</h5>
      <div>
      <div className="input-group mb-3">
      <div className="input-group-prepend">
      <label className="input-group-text" for="inputGroupSelect01">I'm feeling...</label>
    </div>
    <select className="custom-select" id="inputSelect" onChange={this.inputText} name="felling"
         >
    <option selected>Choose...</option>
    <option value="Angry">Angry</option>
    <option value="Confused">Confused</option>
    <option value="Good">Good </option>
    <option value="Happy">Happy </option>
    <option value="Proud">Proud  </option>
    <option value="Proud">Sad </option>
    <option value="Shy">Shy </option>
    <option value="Tired">Tired </option>
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
    <button type="button" className="btn btn-outline-dark m-2" onClick={e => this.newLog()} >Submit this Feeling</button>
    </div>
    </div>
    </div>  
    </div>
    
    );
  }
}
export default App;
 
