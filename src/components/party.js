import React from 'react';



class Party extends React.Component {

    state = {
        name: '',
        party: [],
        partyMember1: '',
        partymember2: '',
        partymember3: '',
        partymember4: '',
        partymember5: ''
    }


    characterNames = () => {
        this.props.allCharacters.map( char => {
            return <option> { char.name } </option>
        })
    }

    optionCharacter = (e) => {
        console.log(this.state.party)
        this.setState({
            [e.target.id]: e.target.value,
            party: [...this.state.party, [e.target.value]]
        })
    }

    partyName = (e) => {
        this.setState({
            name: e.target.value
        })
    }


    render () {

        // console.log(this.state.partyMember1.name)
        console.log(this.state.partyMember1.name)

        return ( 

        
        <div className='create-window'>
            <div className='row'>
                <h1>Form Your Party</h1> <br/>
                <form>

                    <input onChange={ this.partyName } placeholder="Enter name..." value={this.state.name} name="name" /> Party Name <br/><br/>


                    <select id='partymember1' className='ui search selection dropdown' onChange={ this.optionCharacter }>
                        <option>Select Character...</option>
                        { this.props.allCharacters.map( char => { return <option value={char}>{ char.name }</option>}) }
                    </select> First Party Member <br/>

                    <select id='partymember2' className='ui search selection dropdown' onChange={ this.optionCharacter }>
                        <option>Select Character...</option>
                        { this.props.allCharacters.map( char => { return <option value={char}> { char.name }</option>}) }
                    </select> Second Party Member <br/>

                    <select id='partymember3' className='ui search selection dropdown' onChange={ this.optionCharacter }>
                        <option>Select Character...</option>
                        { this.props.allCharacters.map( char => { return <option value={char}>{ char.name }</option>}) }
                    </select> Third Party Member <br/>

                    <select id='partymember4' className='ui search selection dropdown' onChange={ this.optionCharacter }>
                        <option>Select Character...</option>
                        { this.props.allCharacters.map( char => { return <option value={char}>{ char.name }</option>}) }
                    </select> Fourth Party Member <br/>

                    <select id='partymember5' className='ui search selection dropdown' onChange={ this.optionCharacter }>
                        <option>Select Character...</option>
                        { this.props.allCharacters.map( char => { return <option value={char}>{ char.name }</option>}) }
                    </select> Fifth Party Member <br/> <br/>

                    <input type="submit" value="Submit" />
                </form><br/>

            </div>
        </div>

    )}
    
}
 
export default Party;

// party limit 5