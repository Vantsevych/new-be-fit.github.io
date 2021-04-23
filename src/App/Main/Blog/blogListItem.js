import React, { Component} from 'react'
import { Link } from 'react-router-dom';


class BlogListItem extends Component {
    
    state = {
        likesCount:5,
    }

    onIncrementClick () {
        this.setState((prevState) => ({
            likesCount:prevState.likesCount + 1,
        }))
    }

    render () {
            const {
                category1,
                category2,
                category3,
                image,
                iconHurt,
                iconClock,
                iconUser,
                title,
                text,
                name,
                date,
                readMore,
            }  = this.props;

        return (
            <>
                <img src={image} alt="" />
            
            <div className="likes">
                <img className="hurt-icon" onClick = {() => this.onIncrementClick()} src={iconHurt} alt="" />
                <span className="counter">{this.state.likesCount}</span>
            </div>

                <div className="blog-1-user">
                    <ul className="post-categories">
                        <li className="categories-tag">
                            <a href="/">{category1}</a>
                        </li>
                        <li className="categories-tag">
                            <a href="/">{category2}</a>
                        </li>
                        <li className="categories-tag">
                            <a href="/">{category3}</a>
                        </li>
                    </ul>

                    <h4 className="entry-title">{title}</h4>

                    <div className="post-excerpt">{text}</div>

                    <div className="line"></div>

                    <div className="post-footer">
                        <span className="autor-card">
                            <img className="autor" src={iconUser} alt="" />
                            <span className="name">
                                <a href="/">{name}</a>
                            </span>
                        </span>
                        <span className="date-on">
                            <img className="icon-clock" src={iconClock} alt="" />
                            <span className="date">{date}</span>
                        </span>
                        <div className="read-more">
                            <Link to="/ReadMore">{readMore}</Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default BlogListItem
