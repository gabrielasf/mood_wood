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
  

    render() {
      return ( 
        <div> 
        <h2>History</h2>
        <div>
  
          {this.state.logs.map((log, index) => ( 
          <div key={index}> 
         <div>
          I'm feeling {log.feeling + " "} because {" " + log.because}
          </div>
          </div>
            
            ))}
  
            
            
        </div>
        
      </div>
        );  
    }
  }
  
  
  export default History;
  