import React, { useState, useEffect } from "react"
import { isCompositeComponent } from "react-dom/test-utils"


function App() {
    const STARTING_TIME = 5
    const [inputData, setInputData] = useState('')
    const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
    const [startGame, setStartGame] = useState(false)
    const [wordCount, setWordCount] = useState(0)

    const handleChange = (event) => {
        const { value } = event.target
        setInputData(value)
    }

    function countWords(str) {
        const wordsArr = str.trim().split(" ")
        const filteredWords = wordsArr.filter(word => word !== "")
        return filteredWords.length
      
    }
    
    function startClock(){
        setStartGame(true)
        setTimeRemaining(STARTING_TIME)
        setInputData('')
    }
    function endGame() {
        setStartGame(false)
        setWordCount(countWords(inputData))
    }

    useEffect(() => {
        if (startGame && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1)
            }, 1000)
        }
        else if (timeRemaining === 0) {
           endGame()
        }
        console.log(startGame)

    }, [timeRemaining, startGame])

    return (
        <div>
            <h1>SPEED TYPING GAME</h1>
            <h1>How fast do you type?</h1>
            <textarea  disabled = {!startGame? true: false} name="inputData" value={inputData} onChange={handleChange} />
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