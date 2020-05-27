import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="card border-0 shadow my-3">
                        <div className="card-body p-3" id="contHome">
                          <div>
                            <img src="https://media.giphy.com/media/3ov9jEp7AkzKJf462Y/giphy.gif" className="p-3 m-2 rounded mx-auto float-left" id="gif" alt="logo"/>
                          </div>
                          <img src="images/how1.png" alt="how" className="float-right-align p-1 mb-1 mt-3"/>
                          <img src="images/areyou.png" alt="areyou" className="mb-1 p-1"/>
                          <img src="images/feeling.png" alt="feeling" className="mb-1 p-1"/>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}
