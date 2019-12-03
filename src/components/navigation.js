import React from 'react'
// import SearchForm from './SearchForm'
// import { Link } from 'react-router-dom'

class NavBar extends React.Component {

  render(){

    console.log(this.props)

    return (

      <div className="navbar">
            {/* <ul className='navul'>
                <li className='navli'><a href="">Home</a></li>
                <li className='navli'><a href="">New Character</a></li>
                <li className='navli'><a href="">Character List</a></li>
                <li className='navli'><a href="">Shop</a></li>
            </ul>  */}
          <ul className='navul'>
            <button onClick={this.props.toggleForm} className="ui button"> New Character! </button>
            <button className="ui button"> Home </button>
            <button onClick={this.props.getCharacters} className="ui button"> All Characters </button>
            <button onClick={this.props.toggleParty} className="ui button"> Your Party </button>
            <button className="ui button"> Shop </button>
          </ul> 
      </div>

    )
  }
}

export default NavBar;