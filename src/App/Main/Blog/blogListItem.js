import React, { Component} from 'react'


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
                            <a href="/">Breacfest</a>
                        </li>
                        <li className="categories-tag">
                            <a href="/">Diet tips</a>
                        </li>
                        <li className="categories-tag">
                            <a href="/">Recepties</a>
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
                            <a href="/">{readMore}</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default BlogListItem
