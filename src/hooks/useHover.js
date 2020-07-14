import {useState, useEffect, useRef} from 'react'


function useHover() {
    const [hovered, setHovered] = useState(false)
    const hover = useRef(null)

    function enter(){
        setHovered(true)
    }

    function leave(){
        setHovered(false)

    }

    useEffect(() =>{
        hover.current.addEventListener("mouseenter", enter)
        hover.current.addEventListener("mouseleave", leave)
        return () => {
            hover.current.removeEventListener("mouseenter", enter)
        hover.current.removeEventListener("mouseleave", leave)
        }
    },[])

    return [hovered, hover]
}

export default useHover