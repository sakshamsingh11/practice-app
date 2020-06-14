import React, { Fragment, useState } from 'react';
import NavBar from 'src/components/NavBar'
import classes from 'src/components/Header/style.css'

const Header = () => {
  const [isNavBarVisible, showNavBar] = useState(false)
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.name}>algoviz</div>
        <div className={classes.creator}>Created by Saksham Singh</div>
      </div>
      <div className={classes.navBtn} onClick={() => showNavBar(true)}></div>
      {isNavBarVisible && <NavBar />}
    </Fragment>
  )
}

export default Header