import React from 'react'
import articles from './articles'
import ReadMoreItem from './ReadMoreItem'

const ReadMoreList = () => {
    return (
        <>
            {
                articles.map(({
                    id,
                    title,
                    iconUser,
                    imageClock,
                    date,
                    imageMain,
                    textTitle,
                    textFirst,    
                    textSecond,    
                    firstText,
                    secondTextH4,
                    secondText,
                    iconHurt,
                    userComment,
                    imageBefore

                    
                
                    }) => (
                        <ReadMoreItem key={id}
                            title={title}
                            iconUser={iconUser}
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
                            userComment={userComment}
                        />
                    ))
            }

            
        </>
    )
}

export default ReadMoreList