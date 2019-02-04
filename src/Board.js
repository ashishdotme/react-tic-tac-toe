import React, { Component } from "react";
import Square from "./Square";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill("O")
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = "X";
    this.setState(state => ({
      squares: squares
    }));
  }

  renderSquare(i) {
    return (
      <Square
        id={i}
        value={this.state.squares[i]}
        handleClick={this.handleClick}
      />
    );
  }

  render() {
    const status = "Welcome to tic-tac-toe";
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
