import React from 'react'
import articles from './articles'
import ReadMoreItem from './ReadMoreItem'
import articles from './articles'

const ReadMoreList = () => {
    return (
        <>
            {
                articles.map(({
                    title,
                    imageMain,
                    imageClock,
                    date,
                    imageBefore,
                    textTitle,
                    textFirst,
                    textSecond,
                    firstText,
                    secondTextH4,
                    secondText,
                    iconHurt
                    }) => (
                        <ReadMoreItem
                        title={title}
                        imageMain={imageMain}
                        imageClock={imageClock}
                        date={date}
                        imageBefor={imageBefore}
                        textTitle={textTitle}
                        textFirst={textFirst}
                        textSecond={textSecond}
                        firstText={firstText}
                        secondTextH4={secondTextH4}
                        secondText={secondText}
                        iconHurt={iconHurt}
                        />
                    ))
            }

            
        </>
    )
}

export default ReadMoreList