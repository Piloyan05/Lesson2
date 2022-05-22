import React from 'react'
import data from './pricing.json'
import styles from './Pricing.module.css'
export default function Pricing() {
  return (
    <section className='container'>
      <div className={styles.Pricing}>
        <h2 className={styles.title}>Pricing</h2>
      <div className={styles.Paqo}>
      {
      data.map(i=>(
        <div key={i.id} className={styles.price_block}>
          <img src={i.img}/>
          <h2>{i.title}</h2>
          <p className={styles.price_title}>{i.text}</p>
          <p className={styles.price}>{i.price}
          <sup className={styles.per_month}>per month</sup>
          </p>
        </div>
      ))
      }
      </div>
      </div>
      </section>
  )
}
