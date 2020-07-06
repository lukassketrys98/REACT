import React from "react"
import useWordGame from './hooks/useWordGame'

function App() {
    const {
        textRef, 
        handleChange,
        startGame, 
        timeRemaining,
        startClock,
        wordCount,
        inputData
    } = useWordGame(10)

    return (
        <div>
            <h1>SPEED TYPING GAME</h1>
            <h1>How fast do you type?</h1>
            <textarea ref = {textRef} disabled = {!startGame? true: false} name="inputData" value={inputData} onChange={handleChange} />
            <h4>Time remaining: {timeRemaining} </h4>
            <button 
            onClick={startClock} 
            disabled = {startGame}
            >Start Game</button>
            <h1>Word Count: {wordCount} </h1>
        </div>
    )
}

export default App