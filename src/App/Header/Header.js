import React from 'react-dom'
import { Route } from 'react-router'

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'

const Header = () => {
    return(
        <>
            <header className="header">

                <div className="container container-menu">
                    <div className="row row-menu">
                        <div className="col-lg-3 logo">
                            <Route paht="/" exact component={Logo}/>
                        </div>
                        <div className="col-lg-9 menu">
                           <Menu/>
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header