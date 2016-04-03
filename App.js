import React from 'react';

// With State
class App extends React.Component {
  render() {
    return <h1>Hello World</h1>
  }
}

// Stateless
const App2 = () => <h1>Hello Eggheads</h1>

// Tener default exporta solo una clase
export {App, App2};