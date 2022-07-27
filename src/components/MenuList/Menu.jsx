import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
  return (
    <ul className="nav">
    <li className="nav-item">
      <Link className='nav-link' to='/bookmarks'>Bookmarks</Link>
    </li>
    <li className="nav-item">
      <Link className='nav-link' to='/'>Identity API</Link>
    </li>
    <li className="nav-item">
    {/* <Link className='nav-link' to='/profile.html'>Profile</Link> */}
    <a className='nav-link' href='/profile.html'>Profile</a>
    </li>
  </ul>
  )
}

export default Menu