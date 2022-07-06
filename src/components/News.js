import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import PropTypes from 'prop-types'

export class News extends Component {

  render() {
    return (
      <div className="container my-3">
        <div className="mb-4">
            <h3>News of the day</h3>
        </div>
        <div className="row">
            <div className="col-md-4">
                <NewsItem title="mytitle" description="mydesc" imgUrl = "https://sportshub.cbsistatic.com/i/r/2022/07/01/e917d9d8-f5ef-426f-ac18-4b2bfc244a03/thumbnail/1200x675/300d05d2e1906d9b118e5accd456c2f9/lavine-1g.jpg"/>
            </div>
            <div className="col-md-4">
                <NewsItem title="mytitle" description="mydesc" imgUrl = "https://cdn1.dotesports.com/wp-content/uploads/2022/07/01133746/leakedchars-768x432.jpg"/>
            </div>
            <div className="col-md-4">
                <NewsItem title="mytitle" description="mydesc" imgUrl = "https://cdn1.dotesports.com/wp-content/uploads/2022/07/01133746/leakedchars-768x432.jpg"/>
            </div>
        
        </div>
      </div>
    )
  }
}

export default News
