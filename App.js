import React from 'react';

const Heart = () => <span className="glyphicon glyphicon-heart"></span>

class Button extends React.Component {
  render () {
    return <button>{this.props.children}</button>;
  }
}

class App extends React.Component {
  render () {
    return <Button> I <Heart /> React</Button>
  }
}

export default App;