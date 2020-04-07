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
        <h2>History</h2>
        <div>
  
          {this.state.logs.map((log, index) => ( 
          <div key={index}> 
         <div>
          I'm feeling {log.feeling + " "} because {" " + log.because}
          
          <button
            className="btn btn-outline-info btn-sm m-2"
            onClick={() => this.deleteLog(log.id)}>
            Delete
            </button>
          
          </div>
          </div>
            
            ))}
  
            
            
        </div>
        
      </div>
        );  
    }
  }
  
  
  export default History;
  