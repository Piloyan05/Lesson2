import React from 'react'
import styles from './About.module.css'
export default function Textcontent() {
    let infoUs = [
        { id: 1, title: "Pupils", count: 800 },
        { id: 2, title: "Teachers", count: 18 },
        { id: 3, title: "Foreign languages", count: 6 }
    ]

    return (
        <div>
            <h2 className={styles.About_title}>About Us</h2>
            <p className={styles.About_text}>The model offers a framework for discussing problems related to the user's experience, as well as possible ways and means of solving them. Application development begins at the top level (strategy), where the future software product is described quite abstractly from the point of view of the expectations of both users and the customer.</p>
            <div className={styles.info}>
                {infoUs.map(i => (
                    <div key={i.id}>
                        <h2>{i.count}</h2>
                        <p>{i.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
