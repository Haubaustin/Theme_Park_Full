import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dummy from '../data/dummy'

const ParkDetails = (props) => {
let {id}  = useParams()
console.log(id)
const [selectedPark, setPark] = useState('')

useEffect(() => {
    let selectPark = dummy.find(
        (park) => park.id === parseInt(id)
    )
    console.log(selectPark)
    setPark(selectPark)
    
}, [props.parks, id])


return (
    <div>
    <h3>{selectedPark.parkName}</h3>
    <p>{selectedPark.parkPrice}</p>
    </div>)

}

export default ParkDetails