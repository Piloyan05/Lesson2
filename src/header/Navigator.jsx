import React,{Component} from "react";
import styles from "./Header.module.css"

class Navigator extends React{
    constructor(){
        super()
    }
    render(){
        let menu=[
            {
                id:Date.now(),
                item:"Home"
            },
            {
                id:Date.now(),
                item:"About"
            },
            {
                id:Date.now(),
                item:"Blog"
            },
            {
                id:Date.now(),
                item:"Contact"
            }
        ]
        return(
            <ul className={styles.menu}>
                {menu.map(i=>(
                    <li key={i.id}>{i.item}</li>
                ))}
            </ul>
        )
    }
} 

export default Navigator