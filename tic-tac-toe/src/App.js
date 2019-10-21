import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from "./board"

class App extends React.Component{
    render(){
        return (
            <div>
            <h1 id="h1"> Tic Tac Toe </h1>
            <Board />
            </div>
        );
    }
}

export default App;
