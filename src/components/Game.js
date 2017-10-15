import React, { Component } from 'react';

import rock from '../assets/rock.png';
import paper from '../assets/paper.png';
import scissors from '../assets/scissors.png';

class Game extends Component {

  render() {
    const player = this.props.player;
    return (
      <div className="game">
        <img src={ rock } className={ player === "rock" ? "active" : ""} onClick={ () => this.props.handleChoice("rock")} alt="choice" />
        <img src={ paper } className={ player === "paper" ? "active" : ""} onClick={ () => this.props.handleChoice("paper")} alt="choice" />
        <img src={ scissors } className={ player === "scissors" ? "active" : ""} onClick={ () => this.props.handleChoice("scissors")} alt="choice" />
      </div>
    );
  }
}

export default Game;
