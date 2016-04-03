import React from 'react';
import ReactDOM from 'react-dom';

// With State
class App extends React.Component {
  render() {
    let txt = this.props.txt;
    return <h1>{txt}</h1>
  }
}

// Por motivo x, se tiene que declarar fuera de la clase
App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
  txt: 'Default Goncy'
}

ReactDOM.render(
  <App cat={5} txt="This is the props text" />,
  document.getElementById('app')
);