import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footer">

                <div className="container container-footer">
                    <div className="row row-footer">
                            <div className="col-lg-3 footer-col-1">
                            <h4>Our localization</h4>
                            <p>
                                Envato
                                <br/>
                                Level 13, 2 Elizabeth,
                                <br/>
                                Victoria 3000,
                                <br/>
                                Australia
                            </p>
                            <div className="social">
                                <span className="fb"></span>
                                <span className="tw"></span>
                                <span className="pint"></span>
                            </div>
                        </div>

                        <div className="col-lg-3 footer-col-2">
                            <h4>Get healthy knowledge every week</h4>
                            <form action="">
                                <input className="input-email" type="text" placeholder="Email"/>
                            </form>
                            <div className="footer-btn">
                                <a href="">Sudscribe</a>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>

                        <div className="col-lg-3 footer-col-3">
                            <ul>
                                <li className="li-1">
                                    <a className="a-point" href="">Stet clita kasd</a>
                                </li>
                                <li className="li-2">
                                    <a className="a-point" href="">Gubergren, no sea</a>
                                </li>
                                <li className="li-3">
                                    <a className="a-point" href="">Takimata sanctus est</a>
                                </li>
                                <li className="li-4">
                                    <a className="a-point" href="">Duis autem vel eum</a>
                                </li>
                                <li className="li-5">
                                    <a className="a-point" href="">Iriure dolor in esse</a>
                                </li>
                                <li className="li-6">
                                    <a className="a-point" href="">Molestie consequat</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 footer-col-4">
                            <ul>
                                <li className="li-7">
                                    <a className="a-point" href="">Illum dolore eu eros</a>
                                </li>
                                <li className="li-8">
                                    <a className="a-point" href="">Et accumsan et iusto</a>
                                </li>
                                <li className="li-9">
                                    <a className="a-point" href="">Consectetuer adipiscing elit</a>
                                </li>
                                <li className="li-10">
                                    <a className="a-point" href="">Eleifend option congue</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="full-container">
                    <div className="container">
                        <div className="row row-reserved">
                            <div className="col-lg-11 reserved">
                                <p>
                                    © 2021 BeDietitian 3 - Betheme. All Rights Reserved.
                                </p>
                            </div>

                            <div className="col-lg-1 back-to-start">
                                <img src="img/free-icon-up-chevron-2089643.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>

        </>
    )
}


export default Footer