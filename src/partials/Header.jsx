import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import AuthBtn from '../components/Headers/AuthBtn'
import Greeting from '../components/Headers/Greeting'
import Menu from '../components/MenuList/Menu'

const Header = () => {
  const {user} = useAuth0()
  return (
    <>
        <nav className="navbar bg-light nav-menu">
            <div className="container-fluid">
                <span className="navbar-brand h1">Zluri Browser Extension</span>
                <Greeting name={user?.given_name}/>
                <Menu/>
                <AuthBtn/>
            </div>
        </nav>
    </>
  )
}

export default Header