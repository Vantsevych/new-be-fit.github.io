import React from 'react'

const ReadMoreItem = ({
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
    imageBefore, 

}) => {
    return (
        <>
            <div className="container container-title">
                <div className="row">
                    <div className="col-lg-12 title">
                        <h1 className="read-more-title">{title}</h1>
                    </div>
                    <div className="col-lg-12">
                        <div className="intro">
                            <span className="autor-card">
                                <img className="icon-autor" src={iconUser} alt="" />
                                <span className="name"> admin </span>
                            </span>
                            <span className="date-on">
                                <img className="icon-clock" src={imageClock} alt="" />
                                <span className="date">{date}</span>
                            </span>
                            <span>
                                <ul className="categories">
                                    <li>Breakfasts,</li>
                                    <li>Diet trips,</li>
                                    <li>Recepies</li>
                                </ul>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row row-readMore">
                    <div className="col-lg-12 icon-article">
                        <img src={imageMain} alt=""/>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6 read-more-title">
                                <h1>{textTitle}</h1>
                            </div>
                            <div className="col-lg-6 read-more-text">
                                <p>{textFirst}</p>
                                <p>{textSecond}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-6">
                                <p className="first-text">{firstText}</p>
                                <div className="second-text">
                                    <h4>{secondTextH4}</h4>
                                    <p>{secondText}</p>
                                </div>
                            </div>
                            <div className="col-lg-3"></div>
                        </div>
                    </div>

                    <div className="col-lg-12 share">
                        <div className="likes">
                            <img className="hurt-icon" src={iconHurt} alt=""/>
                            <span className="counter">95</span>
                        </div>
                        <ul>
                            <li>Share</li>
                            <li className="fb"></li>
                            <li className="tw"></li>
                            <li className="in"></li>
                            <li className="pint"></li>
                        </ul>
                    </div>
                </div>

                <div className="row row-comments">
                    <div className="col-lg-12">
                        <div className="row coments">
                            <div className="col-lg-1 users">
                                <img src={userComment} alt=""/>
                            </div>
                            <div className="col-lg-11 comments">
                                <form>
                                    <input type="text" placeholder="admin"/>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 comments-counter">3 Comments</div>

                    <div className="col-lg-12 user-block">
                        <div className="row">
                            <div className="col-lg-1 users">
                                <img src={userComment} alt=""/>
                            </div>
                            <div className="col-lg-11 user-comment">
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

                    <div className="col-lg-12 user-block">
                        <div className="row">
                            <div className="col-lg-1 users">
                                <img src={userComment} alt=""/>
                            </div>
                            <div className="col-lg-11 user-comment">
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

                    <div className="col-lg-12 user-block">
                        <div className="row">
                            <div className="col-lg-1 users">
                                <img src={userComment} alt=""/>
                            </div>
                            <div className="col-lg-11 user-comment">
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