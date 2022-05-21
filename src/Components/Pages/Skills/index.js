

import React from 'react';
import style from "./Skills.module.css";
import data from "./json.json";

export default function Skills() {
  
  return (
    <section className="container">
    <div className={style.skills_general}>
      {data.map(i=>(
        <div key = {i.id} className = {i.id===1 ? `${style.speak_blog}` :i.id===4 ? `${style.listening_blog}` :i.id===2 ? `${style.writing_blog}`:""}>
          <img src={i.src}/>
          <h2 >{i.name}</h2>
          <p>{i.text}</p>
          <button >Learn More</button>
        </div>
      ))}
    </div>
    </section>
  )
}
