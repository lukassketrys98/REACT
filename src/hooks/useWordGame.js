import {useState, useRef,useEffect} from 'react'

function useWordGame(startingTime){
    
    const [inputData, setInputData] = useState('')
    const [timeRemaining, setTimeRemaining] = useState(startingTime)
    const [startGame, setStartGame] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textRef = useRef(null)

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
        setTimeRemaining(startingTime)
        setInputData('')
        textRef.current.disabled = false
        textRef.current.focus()
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

    return {
        inputData, textRef, handleChange, startGame, timeRemaining, startClock, wordCount
    }

}

export default useWordGame