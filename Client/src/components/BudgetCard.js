import React from 'react'
import { useNavigate } from "react-router-dom"

const BudgetCard = (props) => {
    let navigate = useNavigate()
    
    const showPark = () => {
        navigate(`${props.key}`)
    }
    return (
        <div onClick={showPark}>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
        </div>
    )
}

export default BudgetCard