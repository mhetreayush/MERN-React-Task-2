import React, { Component } from "react";

class KeyPadComponent extends Component {
  constructor() {
    super();
    this.buttons = [
      "(",
      "CE",
      ")",
      "C",

      "1",
      "2",
      "3",
      "+",

      "4",
      "5",
      "6",
      "-",
      "7",
      "8",
      "9",
      "*",

      ".",
      "0",
      "=",
      "/",
    ];
  }
  render() {
    return (
      <div className="button">
        {this.buttons.map((button, idx) => {
          return (
            <>
              <button
                name={button}
                onClick={(e) => this.props.onClick(e.target.name)}
              >
                {button}
              </button>
              {(idx + 1) % 4 === 0 && <br />}
            </>
          );
        })}
      </div>
    );
  }
}

export default KeyPadComponent;
