import React from 'react'
import { useNavigate } from 'react-router-dom'

const ParkCard = (props) => {
    let navigate = useNavigate()

    const showPark = (park) => {
        navigate(`/parks/${props._id}`)
    }
    return (
        <div onClick={showPark}>
            <h3>{props.name}</h3>
            {props._id}
            <img src={props.img} alt={props.img}/>
            <p>{props.price}<br></br>
                {props.location}</p>
        </div>
    )
}

export default ParkCard