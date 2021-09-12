import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    let xCoordinate = event.clientX;
    let yCoordinate = event.clientY;
    drawChromeBoiAtCoords(xCoordinate, yCoordinate);
    console.log(xCoordinate,yCoordinate)
  }

  toggleClick = () => {
    toggleCycling()
  }
  
  handleKeyPress = (event) => {
    let sign;
    if(event.key === "a"){
      resize(sign = "+")
    }else if(event.key === "s"){
      resize(sign = "-")}
  }

  render() {
    return (
      <canvas 
        onClick = {this.toggleClick}
        onKeyPress ={this.handleKeyPress}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
