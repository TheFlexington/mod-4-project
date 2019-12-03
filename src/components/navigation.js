import React from 'react'
// import SearchForm from './SearchForm'
// import { Link } from 'react-router-dom'

class NavBar extends React.Component {

  render(){

    return (

      <div className="navbar">
            {/* <ul className='navul'>
                <li className='navli'><a href="">Home</a></li>
                <li className='navli'><a href="">New Character</a></li>
                <li className='navli'><a href="">Character List</a></li>
                <li className='navli'><a href="">Shop</a></li>
            </ul>  */}
          <ul className='navul'>
            <button> New Character! </button>
            <button> Home </button>
            <button> Character List </button>
            <button> Shop </button>
          </ul> 
      </div>

    )
  }
}

export default NavBar;