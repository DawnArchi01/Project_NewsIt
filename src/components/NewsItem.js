import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class NewsItem extends Component {

    render() {
        let { title, description , imgUrl, newsUrl} = this.props;
        return (
        <div>
            <div className="card">
                <img src={!imgUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqskQJHJ1Po3cXnFhAWUbjvZ1r4HtwQ1Qk0A&usqp=CAU" : imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}..</h5>
                        <p className="card-text">{description}..</p>
                        <a rel = "noreferrer" href={newsUrl} target = "_blank" className="btn btn-sm btn-outline-secondary">Read More..</a>
                    </div>
            </div>
        </div>
    )
    }
}

export default NewsItem
