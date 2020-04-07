
import React, { Component } from "react";


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          parents: [],
          firstname:"",
          lastname: "",
          email: "",
          username: ""
           }
         }
         componentDidMount() {
          this.getLog();
        }
      
        getLog = () => {
          fetch(`/users/parent`)
            .then(response => response.json())
            .then(response => {
              this.setState({  parents : response });
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

        newUser = () => {
          fetch("/users/parent", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              firstname: this.state.firstname,
              lastname: this.state.lastname,
              email: this.state.email,
              username: this.state.username,
              dateofbirth : this.state.dateofbirth
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
      
        


render(){
    return (
    <div>
    <h2>Sign up</h2>  
  
    <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text" id="">First and last name</span>
    </div>
    <input type="text" class="form-control" onChange={this.inputText} name="firstname"/>
    <input type="text" class="form-control" onChange={this.inputText} name="lastname"/>
  </div>
    
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">your@email.com</span>
    </div>
    <input type="text" class="form-control"  aria-label="email" aria-describedby="basic-addon1" onChange={this.inputText} name="email"/>
  </div>
  
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-default">UserName</span>
    </div>
    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={this.inputText} name="username"/>
  </div>
  
  <div>
  <button type="button" class="btn btn-outline-dark" onClick={e => this.newUser()}>Submit</button>
  </div>
  
    </div>
    );
    }
  }

  export default Register;