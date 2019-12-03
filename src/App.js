import React, { Component } from 'react';
import NavBar from './components/navigation'
import './App.css';
import CharacterCollection from './containers/character-collection';
import CreateCharacter from './components/create';
import Party from './components/party';
// import Character from './components/character';

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

  // renderCharacters(characters){
  //   characters.map(char => {
  //     return <Character character={char} />
  //   })
  // }

  toggleForm = () => {
    this.setState({
      form: !this.state.form
    })
  }

  toggleParty = () => {
    this.setState({
      party: !this.state.party
    })
  }

  render() {

    // console.log(this.state.allCharacters)

    let form;
    if (this.state.form) {
      form = <CreateCharacter />
    }

    let party;
    if (this.state.party) {
      party = <Party />
    }

    return (

      <div className="App">
        <NavBar toggleForm={this.toggleForm} toggleParty={this.toggleParty} getCharacters={this.getCharacters}/>
        { form }

        <div className='party'>
          { party }
        </div>

        <div className='character-container'>
          <CharacterCollection allCharacters={this.state.allCharacters} />
        </div>

      </div>

    );
  }
}

export default App;
