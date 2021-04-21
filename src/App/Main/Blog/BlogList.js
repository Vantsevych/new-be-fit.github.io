import React from 'react'

import BlogListItem from './blogListItem'
import blogs from './blogs'


const BlogList = ()=> {
    return (
        <>
            <div className="row row-blog">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6">
                            <h3 className="blog-h3">Plenty of recipes, advices and good stuff ;)</h3>
                        </div>
                        <div className="col-lg-3"></div>
                    </div>
                </div>

                            {
                    blogs.map (({
                        id,
                        image,
                        iconHurt,
                        iconClock,
                        iconUser,
                        title, 
                        text,
                        name,
                        date,
                        readMore,
                    }) => ( 
                         <div className = "col-lg-6 new-blog " key={id}>
                            <BlogListItem
                                image={image}
                                iconHurt={iconHurt}
                                iconClock={iconClock}
                                iconUser={iconUser}
                                title={title}
                                text={text}
                                name={name}
                                date={date}
                                readMore={readMore}
                            />
                        </div>
                    ))
                }                            
               
            </div>
        </>
    )
}


export default BlogList