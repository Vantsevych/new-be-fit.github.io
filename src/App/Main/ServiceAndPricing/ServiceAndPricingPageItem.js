import React from 'react'

const ServiceAndPricingPageItem = ({
    dollar,
    packet,
    pricePropositionStrong,
    priceProposition,
    btnPrice
}) => {
    return (
        <>
            <div className="dollar">${dollar} </div>
            <h3 className="packet">{packet}</h3>
            <p className="price-proposition">
                <strong>{pricePropositionStrong} </strong>
                {priceProposition}
            </p>
            <a className="price-button" href="">
                {btnPrice}
            </a>
        </>
    )
}


export default ServiceAndPricingPageItem