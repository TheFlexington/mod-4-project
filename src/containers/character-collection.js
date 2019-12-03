import React from 'react';
import Character from '../components/character';
// import CreateCharacter from '../components/create';

class CharacterCollection extends React.Component {

    render() { 
        return (  

            <div className='character-collection'>
                <div className='row'>
                    <Character />
                </div>
            </div>
        );
    }
}
 
export default CharacterCollection;