import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  /*
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

    */

    state = {
      numeros: [
        {name: 'numero 1'},
        {name: 'numero 2'}
      ],
      otherState: 'Otro valor'
    };

    nameChangeHandler = (event) => {
      this.setState ({
        numeros: [
          {name: event.target.value},
          {name: event.target.value}
        ],
        otherState: 'Otro valor'
      });
    };

    switchNameHandler = (event) => {
      this.setState ({
        numeros: [
          { name: 'numero 1 cambiado por botón'},
          { name: 'numero 2 cambiado por botón'}
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
          {/*
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
          */}
          <button
            style={style}
            onClick={this.switchNameHandler} >Cambiar</button>
          <UserInput changed={this.nameChangeHandler} currentName={this.state.numeros[0].name}></UserInput>
          <UserOutput name={this.state.numeros[0].name} ></UserOutput>
          <UserOutput name={this.state.numeros[1].name}></UserOutput>
        </div>
      );
// return React.createElement('div', {className: 'App'}, React.createElement('h1', null));
    }
}

export default App;