import React from 'react'


import './ServiceAndPricingPage.css'
import ServiceAndPricingPageList from './ServiceAndPricingPageList'
import fruit from './dietitian3-section-bg2.png'
import InformationsList from './InformationsList'


const ServiceAndPricingPage = () => {
    return (
        <>  
            
                <img className="fruit-icon" src={fruit} alt=""/>
{/* Price */}
                <div className="price">
                
                    <div className="container container-price">
                        <div className="row row-price">

                            <div className="col-lg-12 plans">
                                <div className="plans-title">
                                    Pricing plans lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </div>
                            </div>

                            <ServiceAndPricingPageList/>

                            <div className="col-lg-12 price-footer-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Velit, amet quibusdam. Modi, accusantium nulla ipsam eos soluta
                                laboriosam laborum sequi.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, optio?
                            </div>
                        </div>
                    </div>

                    <div className="block-info-full">
                        <div className="container">
                            <div className="row row-info">
                                <div className="info-block">
                                    <div className="col-lg-12 info-title">
                                        <h2>Nulla mauris dolor, gravida a varius blandit scelerisque sapien amet</h2>
                                    </div>
                                    <div className="col-lg-12 information">
                                        <div className="row">
                                            <InformationsList/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    )
}


export default ServiceAndPricingPage