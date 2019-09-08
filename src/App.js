import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
    state = {
      persons: [
        { name: 'Francisco', age: 22},
        { name: 'Jennifer', age: 21},
        { name: 'Pahola', age: 21}
      ],
      otherState: 'Otro valor'
    };

    switchNameHandler = (newName) => {
      //console.log('was clicked!');
      // NO HACER ESTO this.state.persons[0].name= 'Javier';
      this.setState({
        persons: [
          { name:newName, age: 22},
          { name: 'Jennifer', age: 33},
          { name: 'Pahola', age: 20}
        ]
      });
    };

    nameChangeHandler = (event) => {
      this.setState({
        persons: [
          { name:'Fran', age: 22},
          { name: event.target.value, age: 33},
          { name: 'Pahola', age: 20}
         ]
      });
    };

    render() {

      const style = {
        backgroudColor: 'white',
        font: 'inhert',
        border: '1px solid blie',
        padding: '8px',
        cursor: 'pointer'
      };

      return (
        <div className="App">
          <h1>Aplicación REACT</h1>
          <button 
            style={style}
            onClick={() => this.switchNameHandler('Javier!!')}>Cambiar nombre</button>
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}></Person>  
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Santacruz')} 
          changed={this.nameChangeHandler} >My hobbie es ir a correr en las mañanas</Person>  
          <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}></Person>
        </div>
      );
// return React.createElement('div', {className: 'App'}, React.createElement('h1', null));
    }
}

export default App;