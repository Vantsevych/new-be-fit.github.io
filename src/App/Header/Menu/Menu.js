import React from 'react'

import {Link} from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <ul class="menu-ul">
                <li class="menu-li-1">
                    <Link class="menu-a" to="/"> Home </Link>
                </li>
                <li class="menu-li-2">
                    <Link class="menu-a" to="/BlogPage"> Blog </Link>
                </li>
                <li class="menu-li-3">
                    <Link class="menu-a" to="/ServiceAndPricing"> Service and Pricing </Link>
                </li>
                <li class="menu-li-4">
                    <Link class="menu-a" to="/"> About </Link>
                </li>
                <li class="menu-li-5">
                    <Link class="menu-a" to="/"> Contact </Link>
                </li>
                <li class="menu-li-6">
                    <Link class="menu-a" to="/"> Buy now </Link>
                </li>
            </ul>
        </>
    )
}

export default Menu