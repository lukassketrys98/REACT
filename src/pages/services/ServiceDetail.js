import React from "react"
import {useParams, useHistory} from 'react-router-dom'
import servicesData from "./servicesData"

function ServiceDetail(props) {
    const {serviceId} = useParams()
    const thisService = servicesData.find(service => service._id === serviceId)
    const history = useHistory()
    function handleClick(){
        console.log("Submitting...")
        setTimeout(()=> {
            history.push("/services")
        },2000)
    }
   
    return (
        <div>
        <h1>Service Detail Page</h1>
        <h3>{thisService.name} - {thisService.price}$</h3>
        <p>{thisService.description}</p>
        <button onClick ={handleClick}>Go back to all services</button>
        </div>
    )
}

export default ServiceDetail