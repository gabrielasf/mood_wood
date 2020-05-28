import React, { Component } from "react";



class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
        marked: false,
        logs: [],
        kidName: []
        }    
    }

         componentDidMount() {
          this.getLog();
          this.getKid();
          //this.getOneParent();
          //this.getNameKid();
          //this.getParentKid();
          
        }
        
        getLog = () => {
          fetch(`/users/idlog/${this.props.currentUserId}`)
            .then(response => response.json())
            .then(response => {
              this.setState({  logs : response });
            });
        };


        // getParentKid = () => {
        //   fetch(`/kidparent/${this.props.currentUserId}`)
        //     .then(response => response.json())
        //     .then(response => {
        //       this.setState({  parents : response });
        //     });
        // }



        getKid = () => {
          fetch(`/users/kidparent/${this.props.currentUserId}`)
          .then(response => response.json()) 
          .then(response => {
               this.setState({  kidName : response });
              });
        };

        // getOneParent = () => {
        //   fetch(`/users/oneparent/${this.props.currentUserId}`)
        //   .then(response => response.json()) 
        //   .then(response => {
        //        this.setState({  kidName : response });
        //     }); 
        // };

        // getNameKid = (name) => {
        //   this.setState({
        //     currentKidName: name,
        //   });
        // };

        // whatName = () => {
        //   fetch(`/users/oneparent/${this.props.currentUserId}`)
        //     .then((response) => {
        //       console.log(response);
        //       return response.json();
        //     })
        //     .then((data) => {
        //       console.log(data);
        //       this.props.getNameKid(data[0].kidName);
        //     })
        //     .catch((error) => {
        //       console.log(error);
             
        //     });
        // };

      
        deleteLog = i => {
            fetch(`/users/log/${i}`, {
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
            <div class="container">
              <div class="card border-0 shadow my-5">
                <div class="card-body p-5">
                 <div>
                  <img src="https://media.giphy.com/media/1hAWUgCXuTMbl0yNMB/giphy.gif" className="p-3 m-2 rounded mx-auto float-right" id="gif" alt="history"/>
                </div>
                
                {(this.state.kidName).map((item, i) => {
                 return <h1 className="font-weight-light display-3 text-center m-3" key={i}> Hello {item.kidName}!</h1>
                })}
              
                <h1 class="font-weight-light display-5">First and most importantly: all our feelings are welcome here.</h1>
                <h2 className="font-weight-lighter">Just below you will see the feelings you have submitted so far. Being consistent with your log can help you get to know your emotions and, by extension, yourself. Happy logging!</h2>
                <div>
                <ul className="list-group list-group-flush">
                  {this.state.logs.map((log, index) => ( 
                    <li key={index} className="list-group-item">
                    <div>
                      <div>
                      <button
                        className="btn btn-outline-warning btn-sm m-2"
                        onClick={() => this.deleteLog(log.Id)}>
                        X
                        </button>
                        I'm feeling <strong>{log.feeling + " "}</strong> because {" " + log.because}   
                      </div>
                    </div>
                   </li>
                  ))}
              </ul> 

              {/* <ul className="list-group list-group-flush">
                  {this.state.parents.map((parent, index) => ( 
                    <li key={index} className="list-group-item">
                    <div>
                      <div>
                         <strong>{parent.kidName}</strong> 
                       
                      </div>
                    </div>
                   </li>
                  ))}
              </ul>  */}


        </div>
    </div>
  </div>
</div>
</div>
        );  
    }
  }
  
  
  export default History;
  
  //{JSON.stringify(this.state.kidName)}

//   <div>
//   {(this.state.kidName).map((item, i) => {
//      return <h1 key={i}>{item.kidName}</h1>
//   })}
// </div>