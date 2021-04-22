import React from 'react'

import YouAreWhatYouEatItem from './YouAreWhatYouEatItem'
import offers from './offers'

const YouAreWhatYouEatList = () => {
    return (
        <>
            {
            
                offers.map(({
                    image,
                    text
                }) => (
                <div class="col-lg-4 theme-diet">
                    <YouAreWhatYouEatItem
                        image={image}
                        text={text}
                    />
                </div>
                ))
            
            }
            
        </>
    )
}

export default YouAreWhatYouEatList