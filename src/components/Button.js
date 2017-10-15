import React, { Component } from 'react';

class Button extends Component {

  render() {
    return (
      <div>
        <button className="btn-default" onClick={ this.props.handleCompare }>PLAY</button>
      </div>
    );
  }

}

export default Button;
