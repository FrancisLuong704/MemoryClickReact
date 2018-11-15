import React, { Component } from 'react';
import './App.css';
import Character from "./components/character/character.js";
import characters from "./components/characters.json";
import Wrapper from '../src/components/Wrapper/Wrapper.js';


class App extends Component {
 state = {
   characters
 }
 
  render() {
    return (
      <Wrapper>
        {this.state.characters.map(characters =>(
          <Character
          id={characters.id}
          name={characters.name}
          image={characters.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;