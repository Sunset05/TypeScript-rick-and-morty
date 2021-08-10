import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';

import { ICharacter } from './types';

interface IAppState {
  name: string;
  characters: ICharacter[];
}

class App extends Component<{}, IAppState> {

  constructor(props: {}) {
    super(props)
    this.state= {
      name: 'Stacey',
      characters: []
    }
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then( ({ results }) => this.setState({ characters:  results as ICharacter[] }))
  }

  showCharacters = () => {
    return this.state.characters.map(character  => {
      return < CharacterCard key={character.id} character={character} />
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome {this.state.name}</h1>
        {this.showCharacters()}
      </div>
    );
  }
}

export default App;
