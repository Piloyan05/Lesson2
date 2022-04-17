import React,{Component} from "react";
import Navigator from "./Navigator"
class Header extends Component{
    constructor(state){
        super()
    }
    render(){
        return(
            <header>
                <div>
                    <img src="logo.jpg"/>
                    <Navigator/>
                </div>
            </header>
        )
    }
}

export default Header

