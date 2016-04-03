import React from 'react';
import ReactDOM from 'react-dom';

// With State
class Spectrum extends React.Component {
  constructor() {
    // Me permite llamar a this como si fuera el componente
    super();

    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }

    // Cuando llamo a update, me permite usar this como si fuera el componente
    this.update = this.update.bind(this)
  }

  update () {
    // Con this.refs referencio al componente Slider que creo en Render, no al elemento del DOM, al componente ser un Input, puedo llamar a la propiedad value (Al ser un componente tambien puedo llamar a sus propiedades, como ref, props)
    let red = ReactDOM.findDOMNode(this.refs.red);
    let green = ReactDOM.findDOMNode(this.refs.green);
    let blue = ReactDOM.findDOMNode(this.refs.blue);

    this.setState({
      red: red.value,
      green: green.value,
      blue: blue.value
    });
  }

  render() {
    return (
      <div>
        <Slider ref="red" update={this.update} />
        {this.state.red}
        <br />
        <Slider ref="green" update={this.update} />
        {this.state.green}
        <br />
        <Slider ref="blue" update={this.update} />
        {this.state.blue}
        <br />
      </div>
    )
  }
}

class Slider extends React.Component {
  render () {
    return (
        <input
          type="range"
          min="0"
          max="255"
          onChange={this.props.update}
        />
    )
  }
}

export default Spectrum;