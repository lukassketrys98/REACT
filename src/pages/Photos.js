import React, {useContext}  from "react"
import Image from "../components/Image"
import {getClass} from "../utils"
import {Context} from '../Context'

function Photos() {
    const {Photos}= useContext(Context)
    
    const Images = Photos.map((image,i) => 
      (
            <Image key = {image.id} img = {image} className = {getClass(i)}/>
        )
    )
    return (
        <main className="photos">
            {Images}
        </main>
    )
}

export default Photos