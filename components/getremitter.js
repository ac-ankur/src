import React, { Component } from 'react';
// import '../assets/css/getremitter.css'
import Header from './header';
// import '../assets/css/style.css';
import '../assets/css/styles.css';

class GetRemitter extends Component {
  constructor() {
    super();
    this.state = {
      showDetails: false,
    };
  }

  toggleDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  render() {
    const { showDetails } = this.state;

    return (
      <div>
        <Header/>
        
        <br />
        <div className="boxlogin1">
          <h3 className="boxhead">Show Sender Detail</h3>
          <br />
          <div className="getremit">
            <div className="card rcard1">
              <p>
                <div className="remitcard">
                  <div className="userremit">
                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                    <h3 className="remithead username">Siddharth</h3>
                  </div>
                  <h3
                    className="remithead btn draw-border10"
                    onClick={this.toggleDetails}
                    id="textButton"
                  >
                    {showDetails ? 'Hide Details' : 'Show Details'}
                  </h3>
                </div>
                {showDetails && (
                  <span id="moreText">
                    {/* Your detailed information table */}
                  </span>
                )}
              </p>
            </div>
          </div>
          <button className="addreceiver">ADD SENDER</button>
          <button className="addreceiver">DELETE SENDER</button>
        </div>
      </div>
    );
  }
}

export default GetRemitter;
