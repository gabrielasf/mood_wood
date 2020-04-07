
import React, { Component } from "react";
import Popup from "reactjs-popup";


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          parents: [],
          firstname:"",
          lastname: "",
          email: "",
          username: "",
          email2: "",
          id:"",
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
              dateofbirth : this.state.dateofbirth,
              email2: this.state.email2,
              id: this.state.id
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
      
        deleteUser = id => {
          fetch(`/users/parent/${id}`, {
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
  <div>
    <br></br>
    <br></br>
    <h5>No longer want to share your feelings?</h5>
    <p className="h6">We're sorry to see you go, but you can delete your account filling the form below.</p>
  <form>
  <div className="form-row align-items-center">
    <div className="col-sm-3 my-1">
      <label className="sr-only" for="inlineFormInputName">Name</label>
      <input type="text" class="form-control" id="inlineFormInputName" name="id" onChange={this.inputText} placeholder="Account ID"/>
    </div>
    <div className="col-sm-3 my-1">
      <label className="sr-only" for="inlineFormInputGroupUsername">Your account ID</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">@</div>
        </div>
        <input type="text" className="form-control" id="inlineFormInputGroupUsername" name="email2" onChange={this.inputText} placeholder="E-mail"/>
      </div>
    </div>
    <div className="col-auto my-1">
      <div className="form-check">
        <div>
         
        </div>
      </div>
    </div>
    <div className="col-auto my-1">
      <button type="submit" className="btn btn-primary" onClick={e =>this.deleteUser(this.state.id)}>Delete account</button>
    </div>
  </div>
</form>
  </div>
  </div>
  
    );
    }
  }

  export default Register;