import React from 'react'
import { Link } from 'react-router-dom'

import logo from "./logo.png"

const Logo = () => {
    return (
        <>
            <div className="logo-a">
                <Link to="/"><img className="logo-icon" src={logo} alt=""/></Link>
            </div>
        </>
    )
}

export default Logo