import React, { Component } from 'react';
import './App.css';
import Character from "./components/character/character.js";
import characters from "./components/characters.json";
import Wrapper from '../src/components/Wrapper/Wrapper.js';
// import Score from "./components/Score/score.js"

let topScore= 0;
let guessesCorrect = 0;
let message = "";

class App extends Component {
 state = {
   characters,
   topScore,
   guessesCorrect,
   message
 }
 
 clicked = id => {
   const characters = this.state.characters;
   const charClicked = characters.filter(characters => characters.id === id);

   if (charClicked[0].clicked) {
     guessesCorrect = 0;
     message = "OOF, Better Luck Next Time. Click on a Pic to Start Again"

     for (let i = 0; i < characters.length; i++) {
      characters[i].clicked = false;
    }

    this.setState({message});
    this.setState({guessesCorrect});
    this.setState({characters});
    //lol my attempt at es6 for this
    // characters.forEach(characters.clicked => {
      
    // });
    } else {
			charClicked[0].clicked = true;

			guessesCorrect = guessesCorrect + 4;
			message = "Good Job!"

			if (guessesCorrect > topScore) {
        guessesCorrect++;
        topScore = guessesCorrect;
				this.setState({topScore});
        this.setState({guessesCorrect});
			}

			characters.sort((a, b) => {
				return 0.5 - Math.random();
			});

			this.setState({characters});
			this.setState({guessesCorrect});
			this.setState({message});
		}
 }

  render() {
    return (
      <Wrapper>
        {/* <Score /> */}
        {this.state.characters.map(characters =>(
          <Character
          id={characters.id}
          name={characters.name}
          image={characters.image}
          clicked={this.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;