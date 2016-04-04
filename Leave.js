import React from 'react';

export default class Leave extends React.Component{
  constructor() {
    super();
    this.state = {leaves: 1};
  }

  drawLeaves() {
    let temp = "";
    let num = this.props.num || this.state.leaves;
    for (var i = num - 1; i >= 0; i--) {
      temp += "*";
    };

    return temp;
  }

  render(){
    return <div>{this.drawLeaves()}</div>
  }
}
