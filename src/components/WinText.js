import React, { Component } from 'react';

class WinText extends Component {

  render() {
    return (
      <div>
        {this.props.displayMessage && <p>{this.props.message}</p>}
      </div>
    );
  }

}

export default WinText;
