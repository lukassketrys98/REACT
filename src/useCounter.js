import {useState, useContext} from 'react'

function useCounter(){
    //initialize state
    //create any functions we need for modyfing state 
    //return whatever we want another component to have access to (count, increment)


    const [count,setCount] = useState(0)
    const increment = () => {
        setCount(prevCount => prevCount + 1)
     }

     return {count, increment}

}
export default useCounter