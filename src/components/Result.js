import React, { Component } from 'react';

class Result extends Component {

  render() {
    return (
      <div className="Result">
        <div>
          <h2>You</h2>
          <h2> {this.props.resultUser} </h2>
        </div>
        
        <div>
          <h2>Computer</h2>
          <h2> {this.props.resultComputer} </h2>
        </div>

      </div>
    );
  }

}

export default Result;
