import React, {useState, useEffect} from "react"
import randomcolor from "randomcolor"

function App() {
    const [count, setCount] = useState(0)
    const [answer, setAnswer] = useState("Yes")
    const [color, setColor] = useState('')
    
 
    //only rerenders when the count is changed
    // useEffect(() => {
    //     setColor(randomcolor())
    // }, [count])

    useEffect(() => {
        setColor(randomcolor())
       
    }, [count]) //[count] componentDidUpdate

//only set up , run once

    useEffect(() => {
        const intervalId = setInterval(()=>{
            setCount(prevCount => prevCount +1)
           }, 1000)
           //componentWillUnmount
           return () => {
            clearInterval(intervalId)
           }
    }, []) //  [ ]  componentDidMount

    return (
        <div>
            <h1 style = {{color: color}}>{count}</h1>
         
        </div>
    )
}

export default App
