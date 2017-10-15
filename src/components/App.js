import React, { Component } from 'react';
import Game from './Game';
import Button from './Button';
import Result from './Result';

import 'spectre.css';
import '../stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player : "",
      computer : "",
      playWin : 0,
      resultUser : 0,
      resultComputer : 0
    };
  }

  handleChoice = (choice) => {
    this.setState({
        player : choice,
        computer : ["rock", "paper", "scissors"][Math.floor(Math.random()*3)],
    })
  };

  handleCompare = () => {
    let player = this.state.player;
    let computer = this.state.computer;

    if (player === computer) {this.setState({playWin:3})}
    else if (player === "rock") {this.setState({playWin : computer === "scissors" ? 1 : 2});
    }
    else if (player === "paper") {this.setState({playWin : computer === "scissors" ? 2 : 1});
    }
    else if (player === "scissors") {this.setState({playWin : computer === "paper" ? 1 : 2});
    }
    setTimeout(() => {
      if (this.state.playWin === 1) {this.setState({resultUser : this.state.resultUser+1})}
      else if (this.state.playWin === 2) {this.setState({resultComputer: this.state.resultComputer+1})}
    }, 100);

    setTimeout(() => {
      const winMessage = this.state.playWin === 3 ? "It's Draw" : `Player ${this.state.playWin === 2 ? "lose":"win"} with ${player} against ${computer}`
      this.setState({
        message: winMessage,
        player : ""
      });
      setTimeout( () => {this.showTempMessage();
      }, 100);
    }, 100);
  }

  showTempMessage = () => {this.setState({displayMessage : true});
    setTimeout(() => {this.setState({displayMessage : false});
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <h1>SHIFUMI</h1>
        <p> Rock, Paper or Scissor ? </p>
        <Game handleChoice={ this.handleChoice } player={this.state.player}/>
        <Button handleCompare={ this.handleCompare }/>
        <Result resultUser={this.state.resultUser} resultComputer={this.state.resultComputer}/>
        <div>
          {this.state.displayMessage && <p>{this.state.message}</p>}
        </div>
      </div>
    );
  }
}

export default App;
