import React from 'react-dom'
import { Route } from 'react-router'

import Slider from './Blog/Slider/Slider'
import BlogList from './Blog/BlogList'
import BlogPage from './Blog/BlogPage/BlogPage'

const Main = () => {
    return (
        <>
            <main class="main">

                <Route path="/" exact component={Slider}/>
                {/* <Slider/> */}

{/* Blog  */}

                <div class="blog">
                    <div class="container blog-container">
                        {/* <BlogList/> */}
                        <Route path="/" exact component={BlogList}/>
                        <Route path="/BlogPage" component={BlogPage}/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main