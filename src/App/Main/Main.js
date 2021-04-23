import React from 'react-dom'
import { Route } from 'react-router'

import Slider from './Blog/Slider/Slider'
import BlogList from './Blog/BlogList'
import BlogPage from './Blog/BlogPage/BlogPage'
import ServiceAndPricingPage from './ServiceAndPricing/ServiceAndPricingPage'
// import YouAreWhatYouEat from './YouAreWhatYouEat/YouAreWhatYouEat'
import ReadMore from "./ReadMore/ReadMore"

const Main = () => {
    return (
        <>
            <main className="main">
                <Route path="/" exact component={Slider}/>
                
{/* Blog  */}

                <div className="blog">
                      <Route path="/ReadMore" exact component={ReadMore}/>
                    <div className="container blog-container">
                        <Route path="/" exact component={BlogList}/>
                        <Route path="/BlogPage" exact component={BlogPage}/>
                      
                    </div>
                </div>

                {/* <div class="content">
                    <div class="container">
                        <YouAreWhatYouEat/>
                    </div>
                </div> */}

                <div className="price">
                    <div className="container container-price">
                        <div className="row row-price">
                            <Route path="/ServiceAndPricingPage" exact component={ServiceAndPricingPage}/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main