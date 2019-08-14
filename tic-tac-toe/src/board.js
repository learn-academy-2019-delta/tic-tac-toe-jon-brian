import React, { Component } from 'react'
import Square from './square.js'
import './App.css'

class Board extends Component{
    constructor(props){
        super(props)
        this.state = { spaces: ["", "", "", "", "", "", "", "", ""],
                        turn: 0
                    }
    }
    onClick = (index) =>{
        let { spaces, turn } = this.state
        let arr = spaces
        let num = turn
        if(turn === 0){
            arr[index] = "X"
            this.setState({spaces: arr})
            num+=1
            this.setState({turn: num})
        } else {
            arr[index] = "O"
            this.setState({spaces: arr})
            num-=1
            this.setState({turn: num})
        }
        if(arr[0]=="X" && arr[1]=="X" && arr[2]=="X"|| arr[3]=="X" && arr[4]=="X" && arr[5]=="X"|| arr[6]=="X" && arr[7]=="X" && arr[8]=="X"|| arr[0]=="X" && arr[3]=="X" && arr[6]=="X"|| arr[2]=="X" && arr[4]=="X" && arr[6]=="X" || arr[0]=="X" && arr[4]=="X" && arr[8]=="X" || arr[1]=="X" && arr[4]=="X" && arr[7]=="X" || arr[2]=="X" && arr[5]=="X" && arr[8]=="X"){
            alert("x winner")
        }else if(arr[0]=="O" && arr[1]=="O" && arr[2]=="O"|| arr[3]=="O" && arr[4]=="O" && arr[5]=="O"|| arr[6]=="O" && arr[7]=="O" && arr[8]=="O"|| arr[0]=="O" && arr[3]=="O" && arr[6]=="O"|| arr[2]=="O" && arr[4]=="O" && arr[6]=="O" || arr[0]=="O" && arr[4]=="O" && arr[8]=="O" || arr[1]=="O" && arr[4]=="O" && arr[7]=="O" || arr[2]=="O" && arr[5]=="O" && arr[8]=="O"){
                alert("o winner")
        }
    }
    reset =()=>{
        this.setState({spaces:["", "", "", "", "", "", "", "", ""]})
        this.setState({turn:0})
    }
    render(){
        let { spaces } = this.state
        let square = spaces.map((value, index) =>{
            return(
            <Square
                key={index}
                index={index}
                value={value}
                onClick={this.onClick}
            />
            )
        })
        return(
            <div id="flex">
                <div id="grid">{square}</div>
                <button onClick={this.reset} style={{width:"50px", borderRadius:"4px"}}>Reset</button>
            </div>
        )
    }
}

export default Board
