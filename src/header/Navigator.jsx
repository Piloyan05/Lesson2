import React,{Component} from "react";
import styles from "./Header.module.css"


class Navigator extends Component{
    constructor(){
        super()
    }
    render(){
        let menu=[
            {
                id:1,
                item:"Home"
            },
            {
                id:2,
                item:"About"
            },
            {
                id:3,
                item:"Blog"
            },
            {
                id:4,
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