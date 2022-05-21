
import React from 'react'
import Textcontent from './Textcontent'
import AboutImg from './AboutImg'
import styles from './About.module.css'
export default function About() {
  return (
  <section className="container">
  <div className={styles.About_content}>
  <Textcontent/>
  <AboutImg/>
  </div>
  </section>
  )
}
