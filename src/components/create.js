import React, { Component } from 'react';
// import { thisExpression } from '@babel/types';

const API = 'http://localhost:3000/api/v1/characters'

class CreateCharacter extends Component {


    state = {
        skillPoints: 40,
        gender: '',
        name: '',
        strength: 0,
        dexterity: 0,
        intelligence: 0,
        endurance: 0,
        luck: 0,
        gold: 200
      }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(char => this.props.renderCharacter(char))
        this.clearState()
    }

    clearState = () => {
        this.setState({
            skillPoints: 40,
            gender: '',
            name: '',
            strength: 0,
            dexterity: 0,
            intelligence: 0,
            endurance: 0,
            luck: 0,
        })
    }

    clickHandlerPlus = (e, stat) => {
        e.preventDefault()
        if (this.state.skillPoints > 0) {
            this.setState({
            [stat]: this.state[stat] + 1,
            skillPoints: this.state.skillPoints -1
            });
        } else {
            alert('You have used up all your skill points')
        }
    }

      
    clickHandlerMinus = (e, stat) => {
        e.preventDefault()
        if (this.state[stat] === 0) return
        if (this.state.skillPoints < 40) {
        this.setState({
            [stat]: this.state[stat] -1,
            skillPoints: this.state.skillPoints + 1
            });
        } else {
            alert(`Your ${stat} can't fall below 0 traveler`)
        }
    }

    genderHandler = (e) => {
        this.setState({ 
        gender: e.target.value 
        });
    }

    nameHandler = (e) => {
        this.setState ({
            name: e.target.value
        })
    }

    render() { 

        console.log(this.props)

        return (

    <div className='create-window'><br/>
        <form onSubmit={this.handleSubmit} id='create-character-form'>

            Name: <br/>
            <input onChange={e => this.nameHandler(e)} placeholder="Enter name..." value={this.state.name} name="name" /> <br/><br/>

            <select name='gender' value={this.state.gender} onChange={e => this.genderHandler(e)} className='ui search selection dropdown'>
                <option >Select...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select> Gender <br/><br/>

            <input type="integer" value={this.state.strength} />
            <button onClick={(e) => this.clickHandlerMinus(e, "strength")}>-</button>
            <button onClick={(e) => this.clickHandlerPlus(e, "strength")}>+</button> Strength <br/>

            <input type="integer" name="dexterity" value={this.state.dexterity} />
            <button onClick={(e) => this.clickHandlerMinus(e, "dexterity")}>-</button>
            <button onClick={(e) => this.clickHandlerPlus(e, "dexterity")}>+</button> Dexterity <br/>

            <input type="integer" name="intelligence" value={this.state.intelligence} />
            <button onClick={(e) => this.clickHandlerMinus(e, "intelligence")}>-</button>
            <button onClick={(e) => this.clickHandlerPlus(e, "intelligence")}>+</button> Intelligence <br/>

            <input type="integer" name="endurance" value={this.state.endurance} />
            <button onClick={(e) => this.clickHandlerMinus(e, "endurance")}>-</button>
            <button onClick={(e) => this.clickHandlerPlus(e, "endurance")}>+</button> Endurance <br/>

            <input type="integer" name="luck" value={this.state.luck} />
            <button onClick={(e) => this.clickHandlerMinus(e, "luck")}>-</button>
            <button onClick={(e) => this.clickHandlerPlus(e, "luck")}>+</button> Luck <br/>

            <input type="submit" value="Submit" />

        </form> <br/>
    </div>

         );
    }
}
 
export default CreateCharacter;

/* <button onClick={this.props.minus}>-</button> <button onClick={() => this.props.plus} value={`${this.props.characterStats.strength}`} className='strength'>+</button>  { this.props.characterStats.strength } Stength <br></br>
                <button onClick={this.props.minus}>-</button> <button onClick={this.props.plus} value={`${this.props.characterStats.dexterity}`} className='dexterity'>+</button>  { this.props.characterStats.dexterity } Dexterity <br></br>
                <button onClick={this.props.minus}>-</button> <button onClick={this.props.plus} value={`${this.props.characterStats.intelligence}`} className='intelligence'>+</button>  { this.props.characterStats.intelligence } Intelligence <br></br>
                <button onClick={this.props.minus}>-</button> <button onClick={this.props.plus} value={`${this.props.characterStats.endurance}`} className='endurance'>+</button>  { this.props.characterStats.endurance } Endurance <br></br>
                <button onClick={this.props.minus}>-</button> <button onClick={this.props.plus} value={`${this.props.characterStats.luck}`} className='luck'>+</button>  { this.props.characterStats.luck } Luck <br></br> */

/*
      clickHandlerPlus = (e) => {
        e.preventDefault()
        // console.log(e.target.previousSibling.previousSibling.name)
        // console.log(e.target.previousSibling.previousSibling.value)
        // let statvalue = e.target.previousSibling.previousSibling.value
        let stat = e.target.previousSibling.previousSibling.name
        let newStatValue = this.state[stat] += 1

        this.setState = ({
          [stat]: newStatValue
        });
        console.log(this.state[stat])
        // console.log(parseInt(e.target.previousSibling.previousSibling.value)++)
        e.target.previousSibling.previousSibling.value = this.state[stat]
      }
*/