import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      textArea: "",
      logs: [],
      firstName: "Maria",
      Id: "",
      Parent_Id:""
       }
    
  }


  //NEED TO ACCES THE USER IN THE DATABASE FOR THE GREETING
  //NEED TO SUBMIT THE LOG WITHOUT A REGISTERED USER
  //NEED TO DISPLAY THE LOGS 

  render() {
    return (
    <div>
    <div className="card border-info mb-4 text-center col-sm-4 position-center">
    <div>
    <img src="images/logomw.png" alt="Card cap" className="img-thumbnail"/>
    </div>
    <div className="card-body">
    <h5 className="card-title">How are you, {this.state.kid.FirstName}?</h5>
      <div>
      <div class="input-group mb-3">
      <div class="input-group-prepend">
      <label class="input-group-text" for="inputGroupSelect01">I'm feeling...</label>
    </div>
    <select class="custom-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">Angry</option>
    <option value="2">Confused</option>
    <option value="3">Good </option>
    <option value="4">Happy </option>
    <option value="5">Proud  </option>
    <option value="6">Sad </option>
    <option value="7">Shy </option>
    <option value="8">Tired </option>
    </select>
    </div>
    <div class="input-group">
    <div class="input-group-prepend">
    <span class="input-group-text">Because</span>
    </div>
    <textarea class="form-control" aria-label="With textarea"></textarea>
    </div>
    </div>
    <div>
    <button type="button" class="btn btn-outline-dark m-2">Submit this Feeling</button>
    </div>
    </div>
    </div>  
    </div>
    
    );
  }
}
export default App;
 








// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
      
//     };
//   }


// render() {
//   return (
//     <div className="App">
//       <h1>It is fine</h1>
//     </div>
//   );
// }
// }

// export default App;

