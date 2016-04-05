import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {val: 0};
    this.update = this.update.bind(this);
  }

  update () {
    this.setState({val: this.state.val + 1});
  }

  componentWillMount() {
    this.setState({m: 2});
  }

  componentWillUnmount() {
    clearInterval(this.inc);
  }

  render() {
    console.log("Rendering");
    return (
      <button onClick={this.update}>{this.state.val * this.state.m}</button>
    );
  }

  componentDidMount() {
    this.inc = setInterval(this.update, 500);
  }
}

class Wrapper extends React.Component {
  constructor () {
    super();
  }

  static mount () {
    ReactDOM.render(<App />, document.getElementById('a'));
  }

  static unmount () {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }

  render() {
    return (
      <div>
        <button onClick={Wrapper.mount.bind(this)}>Mount</button>
        <button onClick={Wrapper.unmount.bind(this)}>Unmount</button>
        <div id="a"></div>
      </div>
    );
  }
}

export default Wrapper