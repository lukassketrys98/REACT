import React from "react"
import servicesData from "./servicesData"
import {Link, Switch, useLocation} from 'react-router-dom'

function ServicesList() {
    const Services = servicesData.map(service => {
        const location = useLocation()
        return (
            <ul key ={service._id}>
                <Link to = {`/services/${service._id}`}>
                <li 
                 >
                    {service.name} - {service.price} $
                    </li>
                </Link>
               
            </ul>
            
            )
    })
    return (
        <div>
            <h1>Services List Page</h1>
            {Services}
        </div>
    )
}

export default ServicesList