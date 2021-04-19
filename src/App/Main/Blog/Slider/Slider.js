import React from 'react'

import slid from './woman-with-apple.jpg'

const Slider = () => {
    return (
        <>
            <div class="container">
                <row class="row-btn">
                    <div class="col-lg-12 slider-title">
                        Your diet can be <br/> tasty and fun
                    </div>
                    <div class="col-lg-12 btn-slider">
                        <button>Discover recipes</button>
                    </div>
                </row>
            </div>

            <div class="slider">
                <img src={slid} alt=""/>
            </div>
        </>
    )
}


export default Slider