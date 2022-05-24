import React from 'react'
import styles from "./Contact.module.css"

export default function Info() {
    return (
        <div>
            <div  className={styles.info}>
                <h2 className={styles.title}>Contact Us</h2>
                <p className={styles.text}>Discover your current English level by taking our free online English test.Sign <br/>up to our newsletter for learning tips and free resources</p>
                <form className={styles.mail} action="">
                    <input placeholder='Enter Your E-mail' type="mail" className={styles.inp} />
                    <button className={styles.btn}>Subscribe</button>
                </form>
            </div>
        </div>
    )
}
