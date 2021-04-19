import React from 'react'

import './styleBlogPage.css'
import iconBoy from './dietitian3-blog-pic3.png'
import iconSalat from './dietitian3-blog-pic4.png'
import iconHurt from './icon-hurt.png'

const BlogPage = () => {
    return (
        <>
           
            <main class="main">

                <div class="container">
                    <row class="row-btn">
                        <div class="col-lg-12 slider-page-title">
                            Your diet can be <br/> tasty and fun
                        </div>
                    </row>
                </div>

                <div class="container container-blog-page">
                    <div class="row row-blog-page">
                        <div class="col-lg-9">
                            <div class="blog">
                                <img src={iconBoy} alt=""/>

                                <div class="likes">
                                    <img class="hurt-icon" src={iconHurt} alt=""/>
                                    <span class="counter">95</span>
                                </div>

                                <div class="blod-user">
                                    <ul class="post-categories">
                                        <li class="categories-tag">
                                            <a href="">Breakfasts</a>
                                        </li>
                                        <li class="categories-tag">
                                            <a href="">Diet tips</a>
                                        </li>
                                        <li class="categories-tag">
                                            <a href="">Recipies</a>
                                        </li>
                                    </ul>

                                    <h4 class="entry-title">Luptatum zzril delenit augue</h4>

                                    <div class="post-excerpt">
                                        Dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut
                                        labore et dolore magna aliquyam erat, sed diam voluptua.
                                    </div>

                                    <div class="line"></div>

                                    <div class="post-footer">
                                        <span class="autor-card">
                                            <img class="autor" src="img/057e2eb392b95a2ecfc9d32d554e3917.png" alt=""/>
                                            <span class="name">
                                                <a href="">admin</a>
                                            </span>
                                        </span>
                                        <span class="date-on">
                                            <img class="icon-clock" src="img/clock.png" alt=""/>
                                            <span class="date">February 9, 2021</span>
                                        </span>
                                        <div class="read-more">
                                            <a href=""> Read more...</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="blog">
                                <img src={iconSalat} alt=""/>

                                <div class="likes">
                                    <img class="hurt-icon" src={iconHurt} alt=""/>
                                    <span class="counter">95</span>
                                </div>

                                <div class="blod-user">
                                    <ul class="post-categories">
                                        <li class="categories-tag">
                                            <a href="">Breakfasts</a>
                                        </li>
                                        <li class="categories-tag">
                                            <a href="">Diet tips</a>
                                        </li>
                                        <li class="categories-tag">
                                            <a href="">Recipies</a>
                                        </li>
                                    </ul>

                                    <h4 class="entry-title">Luptatum zzril delenit augue</h4>

                                    <div class="post-excerpt">
                                        Dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut
                                        labore et dolore magna aliquyam erat, sed diam voluptua.
                                    </div>

                                    <div class="line"></div>

                                    <div class="post-footer">
                                        <span class="autor-card">
                                            <img class="autor" src="img/057e2eb392b95a2ecfc9d32d554e3917.png" alt=""/>
                                            <span class="name">
                                                <a href="">admin</a>
                                            </span>
                                        </span>
                                        <span class="date-on">
                                            <img class="icon-clock" src="img/clock.png" alt=""/>
                                            <span class="date">February 9, 2021</span>
                                        </span>
                                        <div class="read-more">
                                            <a href=""> Read more...</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3">

                            <div class="categories">
                                <h3>Categories</h3>
                                <ul class="categories-block">
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

                            <div class="newsletter">
                                <h3>Sign up for a Newsletter</h3>
                                <p>
                                    Lorem ipsum dolor sitiy amet consectetur hgtyr adipisicing elit. 
                                    Eius, ullam.
                                </p>
                                <button>Subscribe</button>
                            </div>

                            <div class="comments">
                                <h4>Recent comments</h4>
                                <ul class="users-comments">
                                    <li>
                                        <div class="date">February 9,2021</div>
                                        <p><strong>    Oleh</strong> commented on</p>
                                        <a href="">Lorem ipsum dolor sit.</a>
                                    </li>
                                    <li>
                                        <div class="date">February 9,2021</div>
                                        <p><strong>    Oleh</strong> commented on</p>
                                        <a href="">Lorem ipsum dolor sit.</a>
                                    </li>
                                    <li>
                                        <div class="date">February 9,2021</div>
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