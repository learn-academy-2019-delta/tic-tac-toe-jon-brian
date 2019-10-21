import React, { Component } from 'react'
import Square from './square.js'
import './App.css'
import Alert from './alert.js'
import board from './Images/board.png'

class Board extends Component{
    constructor(props){
        super(props)
        this.state = { spaces: ["", "", "", "", "", "", "", "", ""],
                        turn: 0,
                        counter: 0
                    }
    }
    onClick = (index) =>{
        let { spaces, turn, counter } = this.state
        let arr = spaces
        let num = turn
        let counters = counter
        if(turn === 0 && counter!=9){
            arr[index] = "X"
            this.setState({spaces: arr})
            num+=1
            counters++
            this.setState({turn: num})
            this.setState({counter: counters})
        } else if (turn === 1 && counter!=9){
            arr[index] = "O"
            this.setState({spaces: arr})
            num-=1
            counters++
            this.setState({turn: num})
            this.setState({counter: counters})
        } else {
            alert('the game is over. Press reset')
        }
        if(arr[0]=="X" && arr[1]=="X" && arr[2]=="X"|| arr[3]=="X" && arr[4]=="X" && arr[5]=="X"|| arr[6]=="X" && arr[7]=="X" && arr[8]=="X"|| arr[0]=="X" && arr[3]=="X" && arr[6]=="X"|| arr[2]=="X" && arr[4]=="X" && arr[6]=="X" || arr[0]=="X" && arr[4]=="X" && arr[8]=="X" || arr[1]=="X" && arr[4]=="X" && arr[7]=="X" || arr[2]=="X" && arr[5]=="X" && arr[8]=="X"){
            alert("x winner")
        }else if(arr[0]=="O" && arr[1]=="O" && arr[2]=="O"|| arr[3]=="O" && arr[4]=="O" && arr[5]=="O"|| arr[6]=="O" && arr[7]=="O" && arr[8]=="O"|| arr[0]=="O" && arr[3]=="O" && arr[6]=="O"|| arr[2]=="O" && arr[4]=="O" && arr[6]=="O" || arr[0]=="O" && arr[4]=="O" && arr[8]=="O" || arr[1]=="O" && arr[4]=="O" && arr[7]=="O" || arr[2]=="O" && arr[5]=="O" && arr[8]=="O"){
                alert("o winner")
        } else if(counter==8){
            alert("no one wins")
        }
    }
    reset =()=>{
        this.setState({spaces:["", "", "", "", "", "", "", "", ""]})
        this.setState({turn:0})
        this.setState({counter:0})
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
                <div id="grid" style={{zIndex:"1"}}>{square}</div>
                <img src={board}  height="270" style={{position:"absolute"}}/>
                <button onClick={this.reset} className="button" style={{width:"50px", borderRadius:"4px"}}>Reset</button>
            </div>
        )
    }
}

export default Board
