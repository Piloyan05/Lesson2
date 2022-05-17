import React from 'react'
import Girl from './Girl'
import Learn from './Learn'
import styles from "./Home.module.css"

export default function Home() {
  return (
    <section className='container'> 
      <div className={styles.home__block}>
        <Learn/>
        <Girl/>
      </div>
    </section>
  )
}
