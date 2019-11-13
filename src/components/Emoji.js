import React, { Component } from "react";

export class Emoji extends Component {
  render() {
    const { emoji, smiling, crying } = this.props;
    return (
      <div className="container justify-content-center">
        <div className="col-3 container p-5 border border-1 border-dark">
          {emoji}
        </div>
        <button onClick={smiling} className="btn btn-secondary col-3">
          Happy
        </button>
        <button onClick={crying} className="btn btn-secondary col-3 ">
          Sad
        </button>
      </div>
    );
  }
}

export default Emoji;
