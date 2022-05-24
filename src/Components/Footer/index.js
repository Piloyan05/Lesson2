import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className="container">
      <div className={styles.footer}>
        <div>
          <img src="img/Britlex.png" />
        </div>
        <div>
          <p className={styles.text}>Terms and Conditions • Privacy Policy • Cookie Policy</p>
        </div>
      </div>
    </div>
  );
}
