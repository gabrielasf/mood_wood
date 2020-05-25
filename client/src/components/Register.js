
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
    <div className="container" id="inputgr">
    <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                   <img src="images/logingreen.png" alt="login" className="mx-auto d-block"/>
                        <form>
                        <div className="form-group yellow">
                            <input type="text" className="form-control" placeholder="Registered Email" value="" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" value="" />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit" value="Login" />
                        </div>
                        <div className="form-group">
                            <a href="#" className="ForgetPwd">Forget Password?</a>
                        </div>
                    </form>
                </div>
                <div className="col-md-6 login-form-2">
                  <img src="images/signup.png" alt="login" className="mx-auto d-block"/>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Parent's First Name" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Parent's Last Name" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Parent's Email" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Kid's name" value="" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Account's Password" value="" />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit" value="Sign up" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    
    
    
    
    
    
     
    
    <div className="input-group">
    <div className="input-group-prepend">
      <span className="input-group-text" id="">First and last name</span>
    </div>
    <input type="text" className="form-control" onChange={this.inputText} name="firstname"/>
    <input type="text" className="form-control" onChange={this.inputText} name="lastname"/>
  </div>

    <h2>Sign up!</h2>  
    <p>Join our community and get to know <strong>YOURSELF</strong> while understanding <strong>YOUR</strong> emotions!</p>
    <div>
    <div className="input-group">
    <div className="input-group-prepend">
      <span className="input-group-text" id="">First and last name</span>
    </div>
    <input type="text" className="form-control" onChange={this.inputText} name="firstname"/>
    <input type="text" className="form-control" onChange={this.inputText} name="lastname"/>
  </div>
    
  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <span className="input-group-text" id="basic-addon1">your@email.com</span>
    </div>
    <input type="text" className="form-control"  aria-label="email" aria-describedby="basic-addon1" onChange={this.inputText} name="email"/>
  </div>
  
  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <span className="input-group-text" id="inputGroup-sizing-default">UserName</span>
    </div>
    <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={this.inputText} name="username"/>
  </div>
  
  <div>
  <button type="button" className="btn btn-dark" onClick={e => this.newUser()}>Submit</button>
  </div>
  </div>
  <div>
    <br></br>
    <br></br>
    <h5 className="font-weight-light">No longer want to share your feelings?</h5>
    <p className="h6 font-weight-lighter">We're sorry to see you go, but you can delete your account filling the form below.</p>
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
      </div>
    </div>
    </div>
</form>
<div>
    <button type="submit" className="btn btn-outline-danger mt-2" onClick={e =>this.deleteUser(this.state.id)}>Delete account</button>
    </div>
  </div>
  <br/>
  <img src="/images/faces3.png" alt="postit" className="mx-auto" id="imgsignup" />
  </div>
  
    );
    }
  }

  export default Register;