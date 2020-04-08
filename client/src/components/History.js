import React, { Component } from "react";


class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
        marked: false,
        logs: []
        }    
    }

         componentDidMount() {
          this.getLog();
        }
      
        getLog = () => {
          fetch(`/users/emergency`)
            .then(response => response.json())
            .then(response => {
              this.setState({  logs : response });
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
  

    render() {
      return ( 
        <div> 
        <img src="/images/scale.png" className="img-fluid mw-100 mx-auto d-block"/>
        
        <h1 className="font-weight-light display-3 text-left pl-5">Emotions Log</h1>
        <div>
          <ul className="list-group list-group-flush">
          {this.state.logs.map((log, index) => ( 
          <li key={index} className="list-group-item">
          <div>
         <div>
          I'm feeling <strong>{log.feeling + " "}</strong> because {" " + log.because}
            <button
            className="btn btn-outline-warning btn-sm m-2"
            onClick={() => this.deleteLog(log.id)}>
            Delete
            </button>
         </div>
      </div>
   </li>
    ))}
  </ul> 
  </div>
    </div>
        );  
    }
  }
  
  
  export default History;
  