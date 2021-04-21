import React from 'react'

import {Link} from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <ul className="menu-ul">
                <li className="menu-li-1">
                    <Link className="menu-a" to="/"> Home </Link>
                </li>
                <li className="menu-li-2">
                    <Link className="menu-a" to="/BlogPage"> Blog </Link>
                </li>
                <li className="menu-li-3">
                    <Link className="menu-a" to="/ServiceAndPricingPage"> Service and Pricing </Link>
                </li>
                <li className="menu-li-4">
                    <Link className="menu-a" to="/"> About </Link>
                </li>
                <li className="menu-li-5">
                    <Link className="menu-a" to="/"> Contact </Link>
                </li>
                <li className="menu-li-6">
                    <Link className="menu-a" to="/"> Buy now </Link>
                </li>
            </ul>
        </>
    )
}

export default Menu