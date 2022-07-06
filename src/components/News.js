import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country : 'in' ,
    category : 'general' ,
    pageSize : 10
  }

  static propTypes = {
    country : PropTypes.string,
    category : PropTypes.string,
    pageSize : PropTypes.number
  }

  constructor() {
    super();
    this.state = {
      articles: [],
        page : 1,
          loading : false
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?=${this.props.country}&category=${this.props.category}&apikey=8fb2201cb717476999f7ae3805c5efb0&page=1&pageSize=${this.props.pageSize}` ;
    this.setState({loading : true}) ;

    let data = await fetch(url) ;
    let parsedData = await data.json() ;
    this.setState({
      articles : parsedData.articles , 
      totalResults : parsedData.totalResults ,
      loading : false
    })
  }

  prevClick = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?=${this.props.country}&category=${this.props.category}&apikey=8fb2201cb717476999f7ae3805c5efb0&page=${this.state.page - 1}&pageSize=${this.props.pageSize}` ;
    this.setState({loading : true})
    let data = await fetch(url) ;
    let parsedData = await data.json() ;
    this.setState({
      articles : parsedData.articles , 
      page : this.state.page - 1 ,
      loading : false
    })
  }
  
  clickNext = async ()=>{
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
      //TOdo - an emoji and GO to previous page
    }

    else{
      let url = `https://newsapi.org/v2/top-headlines?=${this.props.country}&category=${this.props.category}&apikey=8fb2201cb717476999f7ae3805c5efb0&page=${this.state.page + 1}&pageSize=${this.props.pageSize}` ;
      this.setState({loading : true})
    let data = await fetch(url) ;
    let parsedData = await data.json() ;
    this.setState({
      articles : parsedData.articles , 
      page : this.state.page + 1 ,
      loading : false
    })
    }

  }

  render() {
    return (
      <div className="container my-3">
        <div className="row">
          <h2 className="text-center">Top News of the day</h2>
          {this.state.loading && <Spinner/>}
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0 , 45) : ""} description={element.description ? element.description.slice(0 , 80) : ""} imgUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-warning" onClick={this.prevClick}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-warning" onClick={this.clickNext}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
