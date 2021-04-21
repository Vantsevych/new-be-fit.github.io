import React from 'react'
import plans from './plans'
import ServiceAndPricingPageItem from './ServiceAndPricingPageItem'


const ServiceAndPricingPageList = () => {
    return (
        <>

            {
                plans.map(({
                    id,
                    dollar,
                    packet,
                    packetBr,
                    pricePropositionStrong,
                    priceProposition,
                    btnPrice="Choose"
                }) => (
                    <div className="col-lg-4 price-col" key={id}>
                        <div className="price-list">
                            <ServiceAndPricingPageItem
                                dollar={dollar}
                                packet={packet}
                                packetBr={packetBr}
                                pricePropositionStrong={pricePropositionStrong}
                                priceProposition={priceProposition}
                                btnPrice={btnPrice}
                            />
                        </div>
                    </div>
                ))
            }
            

        </>
    )
}


export default ServiceAndPricingPageList