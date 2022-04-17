import React from "react"
class Person extends React.Component{
    constructor(props){
        super()
        this.state={
            count:0
        }
    }
    increment=()=>{
        this.setState({count:this.state.count + 1})
    }
    decricement=()=>{
        this.setState({count:this.state.count - 1})
    }
    render(){
        return
    }
}

export default Person

