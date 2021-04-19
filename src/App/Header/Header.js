import React from 'react-dom'

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'

const Header = () => {
    return(
        <>
            <header class="header">

                <div class="container container-menu">
                    <div class="row row-menu">
                        <div class="col-lg-3 logo">
                            <Logo/>
                        </div>
                        <div class="col-lg-9 menu">
                           <Menu/>
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header