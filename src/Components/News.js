import React, { useEffect,useState } from "react";
import PropTypes from 'prop-types'
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import InfiniteScroll from "react-infinite-scroll-component";


// Class based component
// export default class News extends Component {
//   static defaultProps={
//     country:'in',
//     pageSize:5
//   }
//   static propTypes ={
//     country:PropTypes.string,
//     pageSize:PropTypes.number
//   }
//   capitalizeFirstLetter=(string)=>{
//     return string.charAt(0).toUpperCase() + string.slice(1,string.length);
//   };

//   constructor(props) {
//     super(props);
//     console.log("Hello i am a constructor from a News component.");
//     state = {
//       articles: [],
//       loading: true,
//       page: 1,
//       totalResults:0
//     };
//     document.title=`${capitalizeFirstLetter(props.category)} - NewsMaster`;
//   }

//   async componentDidMount() {
//     console.log("cdm");
//     setState({
//       loading:true
//     })
//     let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     console.log(parsedData);
//     setState({ articles: parsedData.articles,totalResults:parsedData.totalResults, loading:false });
//   }

//   async updateNews(){
//     props.setProgress(10);
//     setState({
//       loading:true
//     })
//     const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
//     let data = await fetch(url);
//     props.setProgress(30);
//     let parsedData = await data.json();
//     console.log(parsedData);
//     props.setProgress(70);
//     setState({ articles: parsedData.articles,totalResults:parsedData.totalResults, loading:false });
//     props.setProgress(100);
//   }
  
//   // handlePrevClick=async ()=>{
//     //   console.log("Previous");
//     //   setState({
//       //     page:page-1
//       //   })
//       //   updateNews();
//       // }
//       // handleNextClick= async ()=>{
//         //   console.log("Next");
//         //   setState({
//           //     page:page+1
//           //   })
//           //  updateNews(); 
//           // }
          
//           fetchMoreData =async ()=>{
//             setState({page:page+1})
//             const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
//             let data = await fetch(url);
//             let parsedData = await data.json();
//             setState({ articles: articles.concat(parsedData.articles),totalResults:parsedData.totalResults, loading:false });
//           }

//   render() {
//     return (
//       <div className="container my-3">
//         <h2 className="text-center my-3">NewsMaster - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
//         {/* {loading &&<Spinner />} */}
//         <InfiniteScroll
//           dataLength={articles.length}
//           next={fetchMoreData}
//           hasMore={articles.length!==totalResults}
          
//           loader={<Spinner/>}
//         >
//           <div className="container">
//         <div className="row">
//           {articles.map((element) => {
//             return (
//               <div className="col-md-4" key={element.url}>
//                 <NewsItem
//                   title={element.title ? element.title.slice(0, 50) : ""}
//                   description={
//                     element.description ? element.description.slice(0, 100) : ""
//                   }
//                   newsUrl={element.url}
//                   imageUrl={element.urlToImage}
//                   author={element.author}
//                   date={element.publishedAt}
//                   source={element.source.name}
//                 />
//               </div>
//             );
//           })}
//         </div>
//         </div>
//         </InfiniteScroll>
//         {/* Previous and next buttons */}
//         {/* <div className="container d-flex justify-content-between" >
//           <button type="button" disabled={page<=1} className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
//           <button type="button" disabled={page>Math.ceil(totalResults)/20}  className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
//         </div> */}
//       </div>
//     );
//   }
// }

// Functional based component
const News= (props)=>{
  const [articles,setArticles]=useState([]);
  const [loading,setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const [totalResults,setTotalResults]=useState(0);
 
const capitalizeFirstLetter=(string)=>{
  return string.charAt(0).toUpperCase() + string.slice(1,string.length);
};

const updateNews= async ()=>{
    props.setProgress(10);
    setLoading(true);
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    console.log(parsedData);
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }
  
  // useEffect in functional based component instead of componentDidMount in class based
  useEffect(() => {
    document.title=`${capitalizeFirstLetter(props.category)} - NewsMaster`;
    updateNews();
    // eslint-disable-next-line
  },[])
  
  
  // handlePrevClick=async ()=>{
    //   console.log("Previous");
    //   setState({
      //     page:page-1
      //   })
      //   updateNews();
      // }
      // handleNextClick= async ()=>{
        //   console.log("Next");
        //   setState({
          //     page:page+1
          //   })
          //  updateNews(); 
          // }
          
          const fetchMoreData =async ()=>{
            const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
            setPage(page+1);
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticles(articles.concat(parsedData.articles));
            setTotalResults(parsedData.totalResults);
            setLoading(false);
          }
          

    return (
      <div className="container my-3">
        <h2 className="text-center " style={{marginTop:'60px',marginBottom:'20px'}}>NewsMaster - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
        {loading &&<Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 50) : ""}
                  description={
                    element.description ? element.description.slice(0, 100) : ""
                  }
                  newsUrl={element.url}
                  imageUrl={element.urlToImage}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        </div>
        </InfiniteScroll>
        {/* Previous and next buttons */}
        {/* <div className="container d-flex justify-content-between" >
          <button type="button" disabled={page<=1} className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
          <button type="button" disabled={page>Math.ceil(totalResults)/20}  className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
        </div> */}
      </div>
    );
  }

export default News;

News.defaultProps={
  country:'in',
  pageSize:5
}
News.propTypes ={
  country:PropTypes.string,
  pageSize:PropTypes.number
}
