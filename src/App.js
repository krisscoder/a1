import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Navigation from  './components/Navigation.js';
import { todos } from './todos.json'

class App extends Component {
  //construye estado de la app y guarda datos de json
  constructor() {
    super();
    this.state = {
      todos
    }
  }

  render() {
    //procesa datos de json en un loop
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4">
         <div className="card mt-4">
            <div className="card-header">
              <h3>{ todo.title }</h3>
              <span className="badge badge-pill badge-danger ml-2">
                { todo.priority }
              </span>
            </div>
            <div className="card-body">
              <p>{ todo.description }</p>
              <p><mark>{ todo.responsible }</mark></p>
            </div>
           </div>
        </div>
      )
    })
    return (
      <div className="App">
        <Navigation title="Task" len={ this.state.todos.length }/>
        <div className="container">
          <div className="row">{ todos }</div>
        </div>
      </div>
    );
  }
}

export default App;
