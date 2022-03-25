import React from 'react'
import { Link } from 'react-router-dom'



const Nav = () => {
    return (
        <div>
            <span className='title'>
                Bargain Parks
            </span>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Nav