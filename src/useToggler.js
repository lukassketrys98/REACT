import {useState} from 'react'

function useToggler(defaultOnValue) {
   const [isToggledOn,setIsToggledOn] = useState(defaultOnValue)
   
   const toggle = () => {
    setIsToggledOn(prevState => !prevState)
}

return {isToggledOn, toggle}

}

export default useToggler