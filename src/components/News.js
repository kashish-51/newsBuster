import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Spineer from './Spineer';
import PropTypes from 'prop-types';



export class News extends Component {
   static defaultProps={
    country:'in',
    pageSize:4,
    category:'general',
   }
   static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category:PropTypes.string,
   }
capitalizeFirstLetter= (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title =`${this.capitalizeFirstLetter(this.props.category)}- newsBuster`;
    }
    async componentDidMount() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8393bbe89bb34919955a285dc6d4f79d&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);

    }
    handlePrevClick = async () => {
        this.props.setProgress(10);

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8393bbe89bb34919955a285dc6d4f79d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });

        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        })
        this.props.setProgress(100);


    }
    handleNextClick = async () => {
if (Math.ceil(this.state.page + 1 > this.state.totalResults / this.props.pageSize)) {

        }
        else {
            this.props.setProgress(10);
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8393bbe89bb34919955a285dc6d4f79d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1,
                loading: false
            })

        }
        this.props.setProgress(100);

    }
    render() {
        return (
            <>

                <h2 className="text-center mt-10 font-bold text-4xl">newsBuster- Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
           {this.state.loading && <Spineer />}
                <div className=" flex items-center justify-center flex-wrap container my-3 ">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className=" space-x-16 mt-14 row  text-center" key={element.url}>
                            <div className=" mx-[10px] col-md-4 ">
                                <NewsItems title={element.title ? element.title : ""} description={element.discription ? element.description : ""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                            </div>

                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-info" onClick={this.handlePrevClick} >&larr; Previous</button>
                    <button disabled={this.state.page + 1 > this.state.totalResults / this.props.pageSize} type="button" className="btn btn-info" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </>
        )

    }
}

export default News
