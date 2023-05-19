import React from 'react'
import { useGlobalContext } from '../contexts'

const TopNavbar = () => {
  const { userData } = useGlobalContext();
  return (
    <nav className="navbar bg_white fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand">{userData.fullName}</a>
        </div>
    </nav>
  )
}

export default TopNavbar