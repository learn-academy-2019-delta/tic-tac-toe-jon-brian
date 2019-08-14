import React, { Component } from 'react'
import "./App.css"

class Square extends Component{
    onClick=()=>{
        let { onClick, index } = this.props
        return onClick(index)
    }
    render(){
        let { index, value } = this.props
        return(
            <div className="square" onClick={this.onClick}>{value}</div>
        )
    }
}

export default Square
