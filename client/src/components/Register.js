import React, { Component } from "react";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          parents:[],
          firstname:"",
          lastname: "",
          email: "",
          kidname: "",
          password: "",
          register:"default",
          login:"default",
          currentUserId: null
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
              kidname: this.state.kidname,
              password: this.state.password,
            })
          })
            
          .then( response => {
            if (!response.ok) { throw response }
            (this.setState({
              register: "correct",
              }))
            return response.json()
          })
            .catch(error => {
              console.log(error);
              (this.setState({
                register: "incorrect",
                }))
            }); 
        };


      
        logIn = (email, password) => {
          fetch(`/users/logparent/${email}/${password}`)
            .then((response) => {
              console.log(response);
              return response.json();
            })
            .then((data) => {
              console.log(data);
              this.props.getUserId(data[0].id);
              this.setState({
                login: "correct",
                email: "",
                password: "",
              });
            })
            .catch((error) => {
              console.log(error);
              this.setState({
                login: "incorrect",
              });
            });
        };

    
    render(){
    return (
    <div className="container" id="inputgr">
    <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                   <img src="images/logingreen.png" alt="login" className="mx-auto d-block"/>
                   {this.state.login === "correct" && (
                        <div class="alert alert-info m-2 text-center" role="alert">
                        You are logged in!
                      </div>
                      )}

                      {this.state.login === "incorrect" && (
                        <div class="alert alert-warning m-2 text-center" role="alert">
                        Oops! Something is wrong. Please try again.
                      </div>
                      )}

                        <form onsubmit="return false">
                        <div className="form-group yellow">
                            <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.inputText} name="email"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.inputText} />
                        </div>
                        <div className="form-group">
                            <button type="button" className="btnSubmit" value="Login" onClick={(e) =>this.logIn(this.state.email, this.state.password)}>
                              Login
                              </button>
                        </div>
                        <div className="form-group">
                            <a href="#" className="ForgetPwd">Forgot Password?</a>
                        </div>
                    </form>
                </div>

                
                <div className="col-md-6 login-form-2">
                  <img src="images/signup.png" alt="signup" className="mx-auto d-block"/>
                   {this.state.register === "correct" && (
                        <div class="alert alert-info m-1 p-1" role="alert">
                        You have been registered and you are ready to log in!
                      </div>
                      )}

                      {this.state.register === "incorrect" && (
                        <div class="alert alert-warning m-1 p-1" role="alert">
                        Oops! Something is wrong. Please try again.
                      </div>
                      )}
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Parent's First Name" name="firstname" onChange={this.inputText} required />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Parent's Last Name" name="lastname" onChange={this.inputText} required />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Parent's Email" name="email" onChange={this.inputText} required />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Kid's name" name="kidname" onChange={this.inputText} required />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Account's Password" name="password" onChange={this.inputText} required />
                        </div>
                        <div className="form-group">
                            <button className="btnSubmit" type="button" onClick={e => this.newUser()}>
                              Sign Up
                              </button>
                        </div>
                       </form>
                </div>
            </div>
        </div> 
    </div>
  
    );
    }
  }

  export default Register;
