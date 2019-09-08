import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  
    state = {
      persons: [
        { name: 'Francisco', age: 22},
        { name: 'Jennifer', age: 21}
      ],
      otherState: 'Otro valor'
    };

    switchNameHandler = () => {
      //console.log('was clicked!');
      // NO HACER ESTO this.state.persons[0].name= 'Javier';
      this.setState({
        persons: [
          { name: 'Javier', age: 22},
          { name: 'Jennifer', age: 33}
        ]
      });
    };

    render() {
      return (
        <div className="App">
          <h1>Aplicación REACT</h1>
          <button onClick={this.switchNameHandler}>Cambiar nombre</button>
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>
          </Person>  
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}>
            My hobbie es ir a correr en las mañanas
          </Person>  
        </div>
      );
// return React.createElement('div', {className: 'App'}, React.createElement('h1', null));
    }
}

export default App;