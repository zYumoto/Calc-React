import React, { Component } from "react";
import "./Calculator.css";

import Button from "../components/Button"
import Display from "../components/display"

const initialState = {
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
  };

export default class Calculator extends Component {
    state = { ...initialState };

    constructor(props) {
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
      }

      clearMemory() {
        this.setState({ ...initialState });
      }

        setOperation(operation) {
            console.log(operation);
          }
        

          addDigit(n) {
            if (n === "." && this.state.displayValue.includes(".")) {
              return;
            }
        
            const clearDisplay =
              this.state.displayValue === "0" || this.state.clearDisplay;
            const currentValue = clearDisplay ? "" : this.state.displayValue;
            const displayValue = currentValue + n;
            this.setState({ displayValue, clearDisplay: false });
        
            if (n !== ".") {
              const i = this.state.current;
              const newValue = parseFloat(displayValue);
              const values = [...this.state.values];
              values[i] = newValue;
              this.setState({ values });
              console.log(values);
            }
          }

  render() {

    return (

    <div className="calculator">
        <Display value={this.state.displayValue} />

        <Button label="AC"/>
        <Button label="/"/>
        <Button label="7"/>
        <Button label="8"/>
        <Button label="9"/>
        <Button label="*"/>
        <Button label="4"/>
        <Button label="5"/>
        <Button label="6"/> 
        <Button label="-"/>
        <Button label="1"/>
        <Button label="2"/>
        <Button label="3"/>
        <Button label="+"/>
        <Button label="0"/>
        <Button label="."/>
        <Button label="="/>
      </div>
    );
  }
}