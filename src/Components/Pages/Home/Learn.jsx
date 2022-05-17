import React from "react";
import styles from "./Home.module.css"
import { Link } from "react-router-dom";

export default function Learn() {
  return (
    <div>
      <div className={styles.cont}>
          <h1 className={styles.title}>Learn Any  Foreign Language</h1>
          <img className={styles.img} src="img/lamp.png" alt="" />
      </div>
      <p className={styles.text}>
        With our teachers who write a program for each student, you will be able
        to make your first sketch after the first lesson.
      </p>
      <Link to="/homeStart" className={styles.button}>Get started</Link>
    </div>
  );
}
