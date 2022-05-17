

import React, { useState,useEffect } from 'react'
import styles from "./Header.module.css"
import { NavLink,Link } from 'react-router-dom'




export default function Header() {
  return (
    
    <header>
        <div className={`container ${styles.header__navigator}`} >
        
          <div className='logo'>
          <img className='img' alt='logo' src='../../img/Britlex.png'></img>
          </div>
          <div className={styles.items}>
          <ul className={styles.nav}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
          </ul>
          </div>
          <Link className={styles.btn} to="/letsTalk">Let’s Talk</Link>
        </div>
    </header>
  )
}
