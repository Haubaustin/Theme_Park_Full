import React from 'react'
import { useNavigate } from 'react-router-dom'

const ParkCard = (props) => {
    let navigate = useNavigate()

    const showPark = (park) => {
        navigate(`/parks/${park.id}`)
    }
    return (
        <div onClick={showPark}>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
        </div>
    )
}

export default ParkCard