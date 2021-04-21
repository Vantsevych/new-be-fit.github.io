import React from 'react'
import informations from './informations'
import InformationsItem from './InformationsItem'

const InformationsList = () => {
    return (
        <>

        {
            
            informations.map(({
                image,
                title,
                text
            }) => (
                <InformationsItem
                    image={image}
                    title={title}
                    text={text}
                />
            ))
        }

        
        
        </>
    )
}


export default InformationsList