import React, { Component } from 'react';
import NavBar from './components/navigation'
import './App.css';
import CharacterCollection from './containers/character-collection';
import CreateCharacter from './components/create';
import Party from './components/party';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

const API = 'http://localhost:3000/api/v1/characters'

class App extends Component {

  state = {
    form: false,
    party: false,
    allCharacters: []
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then( characters => {
        this.setState({
          allCharacters: [...characters]
        })
      })
  }

  renderCharacter = (character) => {
    this.setState({
      allCharacters: [...this.state.allCharacters, character]
    })
  }

  removeCharacter = (id) => {
    // let arr = [];
    // this.state.allCharacters.filter((char) => {
    //   if (id !== char.id) {
    //     arr = [...arr, char]
    //   }
    // })

    let arr = this.state.allCharacters.filter((char) => {
      return id !== char.id
    })

    this.setState({
      allCharacters: arr
    })
  }

  deleteCharacter = (id) => {
    fetch(`${API}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json' }
    })
    this.removeCharacter(id)
  }

  toggleForm = () => {
    this.setState({
      form: !this.state.form,
      party: false
    })
  }

  toggleParty = () => {
    this.setState({
      party: !this.state.party,
      form: false
    })
  }

  render() {

    // console.log(this.state.allCharacters)

    let form;
    if (this.state.form) {
      form = <CreateCharacter renderCharacter={this.renderCharacter} removeCharacter={this.removeCharacter} />
    }

    let party;
    if (this.state.party) {
      party = <Party allCharacters={this.state.allCharacters}/>
    }

    return (

      <div className="App">
        <NavBar toggleForm={this.toggleForm} toggleParty={this.toggleParty} getCharacters={this.getCharacters}/>
        { form }

        <div className='party'>
          { party }
        </div>

        <div className='character-container'>
          <CharacterCollection allCharacters={this.state.allCharacters} deleteCharacter={this.deleteCharacter}/>
        </div>

      </div>

    );
  }
}

export default App;
