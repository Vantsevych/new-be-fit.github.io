import React from 'react'



const InformationsItem = ({
    image,
    title,
    text
}) => {
    return (
        <>
        
            <div className="col-lg-3 icon">
                <img src={image} alt=""/>
            </div>
            <div className="col-lg-9 info">
                    <h3>{title}</h3>
                    <p>{text}</p>
            </div>
            <div className="col-lg-12 info-underline"></div>
        
        </>
    )
}


export default InformationsItem