import React, { Component } from 'react';
// eslint-disable-next-line;
import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line
import { timingSafeEqual } from 'crypto';

const Greeting = props => {
  return <h1>{props.message}</h1>;
};

//const means cannot change value later
//pros means can change value later
const Greeting1 = props => {
  let { message1, message2 } = props;
  return (
    <div>
      <h1>{message1}</h1>
      <p />
      <h2>{message2}</h2>
    </div>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      greetings: 'Greetings the state',
      message: '',
      movies: [
        { title: 'I am Legend' },
        { title: 'Avengers' },
        { title: 'Star Trek' }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Greeting1
          message1="Hi from component 1"
          message2="This is a piece of cake"
        />
        <Greeting />
        <label>
          <h2>{this.state.greetings}</h2>
        </label>
        <p />
        <ul>
          {this.state.movies.map(movie => {
            return <li>{movie.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
