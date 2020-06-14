import React from 'react';
import { Link } from 'react-router-dom'
import classes from 'src/components/NavBar/style.css'

const NavBar = () => {
  return (
    <div className={classes.container}>
      <Link to='/'>Home</Link>
      <Link to='/software'>Software</Link>
      <Link to='/trees'>Trees</Link>
    </div>
  )
}

export default NavBar