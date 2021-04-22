import React from 'react'

const ReadMoreItem = () => {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 title">
                        <h1>{title}</h1>
                    </div>
                    <div class="col-lg-12">
                        <div class="intro">
                            <ul>
                                <li><i class="autor-before">
                                        <img src={imageMain} alt=""/>
                                    </i></li>
                                <li class="autor">admin</li>
                                <li><i class="date-before">
                                        <img src={clock} alt=""/>
                                    </i></li>
                                <li class="date">{date}</li>
                                <li class="categories">
                                    <ul>
                                        <li>Breakfasts,</li>
                                        <li>Diet trips,</li>
                                        <li>Recepies</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row row-readMore">
                    <div class="col-lg-12 icon">
                        <img src={imageBefore} alt=""/>
                    </div>
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-lg-6 read-more-title">
                                <h1>
                                    {textTitle}
                                </h1>
                            </div>
                            <div class="col-lg-6 read-more-text">
                                <p> {textFirst} </p>
                                <p> {textSecond} </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-lg-3"></div>
                            <div class="col-lg-6">
                                <p class="first-text">

                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Laborum nisi, saepe animi harum fuga aliquam incidunt ipsam
                                    eveniet necessitatibus adipisci sit atque? Fugiat illum architecto
                                    facilis labore vel soluta ducimus repellat officia blanditiis
                                    quos!
                                </p>
                                <div class="second-text">
                                    <h4> {secondTextH4} </h4>
                                    <p> {secondText} </p>
                                </div>
                            </div>
                            <div class="col-lg-3"></div>
                        </div>
                    </div>

                    <div class="col-lg-12 share">
                        <div class="likes">
                            <img class="hurt-icon" src={iconHurt} alt=""/>
                            <span class="counter">95</span>
                        </div>
                        <ul>
                            <li>Share</li>
                            <li class="fb"></li>
                            <li class="tw"></li>
                            <li class="in"></li>
                            <li class="pint"></li>
                        </ul>
                    </div>
                </div>

                <div class="row row-comments">
                    <div class="col-lg-12">
                        <div class="row coments">
                            <div class="col-lg-1 users">
                                <img src="img/users-coment.png" alt=""/>
                            </div>
                            <div class="col-lg-11 comments">
                                <form>
                                    <input type="text" placeholder="admin"/>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-12 comments-counter">3 Comments</div>

                    <div class="col-lg-12 user-block">
                        <div class="row">
                            <div class="col-lg-1 users">
                                <img src="img/users-coment.png" alt=""/>
                            </div>
                            <div class="col-lg-11 user-comment">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Eveniet explicabo id provident minus doloribus sequi deserunt
                                    sint molestias nobis, dolorem, a eligendi consequuntur ipsa.
                                    Eos commodi repudiandae delectus
                                    unde deleniti quia facilis incidunt itaque quas?
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-12 user-block">
                        <div class="row">
                            <div class="col-lg-1 users">
                                <img src="img/users-coment.png" alt=""/>
                            </div>
                            <div class="col-lg-11 user-comment">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Eveniet explicabo id provident minus doloribus sequi deserunt
                                    sint molestias nobis, dolorem, a eligendi consequuntur ipsa.
                                    Eos commodi repudiandae delectus
                                    unde deleniti quia facilis incidunt itaque quas?
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-12 user-block">
                        <div class="row">
                            <div class="col-lg-1 users">
                                <img src="img/users-coment.png" alt=""/>
                            </div>
                            <div class="col-lg-11 user-comment">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Eveniet explicabo id provident minus doloribus sequi deserunt
                                    sint molestias nobis, dolorem, a eligendi consequuntur ipsa.
                                    Eos commodi repudiandae delectus
                                    unde deleniti quia facilis incidunt itaque quas?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ReadMoreItem