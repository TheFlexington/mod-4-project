import React, { Component } from 'react';
import NavBar from './components/navigation'
import './App.css';
import CharacterCollection from './containers/character-collection';
import CreateCharacter from './components/create';

class App extends Component {



  render() {

    return (

      <div className="App">
        <NavBar />
        <CharacterCollection />
        <CreateCharacter />
      </div>

    );
  }
}

export default App;
