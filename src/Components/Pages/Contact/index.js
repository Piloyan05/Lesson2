import React from "react";
import Img from "./Img";
import Info from "./Info";
import styles from "./Contact.module.css"

export default function Contact() {
  return (
    <section className="container">
      <div className={styles.contact__block}>
        <Img/>
        <Info/>
      </div>
    </section>
  );
}
