import React from 'react';

function Character(props) {

  
    let male = 'https://www.empiredancechampionship.com/wp-content/uploads/sites/3/2015/06/male-silhouette.jpg'
    let female = 'https://electronpencil.com/wp-content/uploads/2017/07/female-silhouette-600x600.jpg'
    return (
        console.log(props.character.strength),

        <div className='ui column'>
            <div className='ui card'>
                <img src={ props.character.gender === 'male' ? male : female } className='ui image' alt=''/>
                <p>
                    Name: {props.character.name} <br/>
                    Gold: {props.character.gold} <br/>
                    Strength: {props.character.strength} <br/>
                    Dexterity: {props.character.dexterity} <br/>
                    intelligence: {props.character.intelligence} <br/>
                    Endurance: {props.character.endurance} <br/>
                    Luck: {props.character.luck} <br/>
                </p>
            </div>
        </div>
    );
}

 
export default Character;

// https://cdn1.vectorstock.com/i/thumb-large/46/55/person-gray-photo-placeholder-woman-vector-22964655.jpg  female placeholder image
// https://cdn1.vectorstock.com/i/thumb-large/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg male placeholder image