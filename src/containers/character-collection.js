import React from 'react';
import Character from '../components/character';
// import { defaultCipherList } from 'constants';
// import CreateCharacter from '../components/create';

class CharacterCollection extends React.Component {

    render() {

        // console.log(this.props)

        return (  

            <div className="ui four column grid">
                <div className='row'>
                    { this.props.allCharacters.map(character => < Character key={character.id} character={character} deleteCharacter={this.props.deleteCharacter } />)}
                </div>
            </div>
        );
    }
}
 
export default CharacterCollection;