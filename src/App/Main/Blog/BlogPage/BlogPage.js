import React from 'react'

import './styleBlogPage.css'
import iconBoy from './dietitian3-blog-pic3.png'
import iconSalat from './dietitian3-blog-pic4.png'
import iconHurt from './icon-hurt.png'
import clock from './clock.png'

const BlogPage = () => {
    return (
        <>
           
            <main className="main">

                <div className="container">
                    <row className="row-btn">
                        <div className="col-lg-12 slider-page-title text">
                            Your diet can be <br/> tasty and fun
                        </div>
                    </row>
                </div>

                <div className="container container-blog-page"> 
                    <div className="row row-blog-page">
                        <div className="col-lg-9">
                            <div className="blog">
                                <img src={iconBoy} alt=""/>

                                <div className="likes">
                                    <img className="hurt-icon" src={iconHurt} alt=""/>
                                    <span className="counter">95</span>
                                </div>

                                <div className="blog-user">
                                    <ul className="post-categories">
                                        <li className="categories-tag">
                                            <a href="">Breakfasts</a>
                                        </li>
                                        <li className="categories-tag">
                                            <a href="">Diet tips</a>
                                        </li>
                                        <li className="categories-tag">
                                            <a href="">Recipies</a>
                                        </li>
                                    </ul>

                                    <h4 className="entry-title">Luptatum zzril delenit augue</h4>

                                    <div className="post-excerpt">
                                        Dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut
                                        labore et dolore magna aliquyam erat, sed diam voluptua.
                                    </div>

                                    <div className="line"></div>

                                    <div className="post-footer">
                                        <span className="autor-card">
                                            <img className="autor" src="img/057e2eb392b95a2ecfc9d32d554e3917.png" alt=""/>
                                            <span className="name">
                                                <a href="">admin</a>
                                            </span>
                                        </span>
                                        <span className="date-on">
                                            <img className="icon-clock" src={clock} alt=""/>
                                            <span className="date">February 9, 2021</span>
                                        </span>
                                        <div className="read-more">
                                            <a href=""> Read more...</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="blog">
                                <img src={iconSalat} alt=""/>

                                <div className="likes">
                                    <img className="hurt-icon" src={iconHurt} alt=""/>
                                    <span className="counter">95</span>
                                </div>

                                <div className="blog-user">
                                    <ul className="post-categories">
                                        <li className="categories-tag">
                                            <a href="">Breakfasts</a>
                                        </li>
                                        <li className="categories-tag">
                                            <a href="">Diet tips</a>
                                        </li>
                                        <li className="categories-tag">
                                            <a href="">Recipies</a>
                                        </li>
                                    </ul>

                                    <h4 className="entry-title">Luptatum zzril delenit augue</h4>

                                    <div className="post-excerpt">
                                        Dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut
                                        labore et dolore magna aliquyam erat, sed diam voluptua.
                                    </div>

                                    <div className="line"></div>

                                    <div className="post-footer">
                                        <span className="autor-card">
                                            <img className="autor" src="img/057e2eb392b95a2ecfc9d32d554e3917.png" alt=""/>
                                            <span className="name">
                                                <a href="">admin</a>
                                            </span>
                                        </span>
                                        <span className="date-on">
                                            <img className="icon-clock" src={clock} alt=""/>
                                            <span className="date">February 9, 2021</span>
                                        </span>
                                        <div className="read-more">
                                            <a href=""> Read more...</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">

                            <div className="categories">
                                <h3>Categories</h3>
                                <ul className="categories-block">
                                    <li>
                                        <a href="/">Advices</a>
                                    </li>
                                    <li>
                                        <a href="/">Breakfasts</a>
                                    </li>
                                    <li>
                                        <a href="/">Diet tips</a>
                                    </li>
                                    <li>
                                        <a href="/">Excercises</a>
                                    </li>
                                    <li>
                                        <a href="/">Lunch</a>
                                    </li>
                                    <li>
                                        <a href="/">Recipies</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="newsletter">
                                <h3>Sign up for a Newsletter</h3>
                                <p>
                                    Lorem ipsum dolor sitiy amet consectetur hgtyr adipisicing elit. 
                                    Eius, ullam.
                                </p>
                                <button>Subscribe</button>
                            </div>

                            <div className="comments">
                                <h4>Recent comments</h4>
                                <ul className="users-comments">
                                    <li>
                                        <div className="date">February 9,2021</div>
                                        <p><strong>    Oleh</strong> commented on</p>
                                        <a href="">Lorem ipsum dolor sit.</a>
                                    </li>
                                    <li>
                                        <div className="date">February 9,2021</div>
                                        <p><strong>    Oleh</strong> commented on</p>
                                        <a href="">Lorem ipsum dolor sit.</a>
                                    </li>
                                    <li>
                                        <div className="date">February 9,2021</div>
                                        <p><strong>    Oleh</strong> commented on</p>
                                        <a href="">Lorem ipsum dolor sit.</a>
                                    </li>
                                </ul>
                            </div>
                        </div>           
                    </div>
                </div>
            </main>
        </>
    )
}


export default BlogPage