// import React, { Component } from "react";
import React from "react";

// Class based component
// export default class NewsItem extends Component {
//   render() {
//     let { title, description, imageUrl, newsUrl, author, date, source } =
//       this.props;
//     return (
//       <div>
//         <div className="card" style={{ width: "18rem" }}>
//           <img
//             src={
//               imageUrl == null
//                 ? "https://images.moneycontrol.com/static-mcnews/2023/09/sensex_nifty_sensexdown-770x433.jpg"
//                 : imageUrl
//             }
//             className="card-img-top"
//             alt="..."
//           />
//           <div className="card-body">
//             <h5 className="card-title">
//               {title}
//               <span
//                 className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
//                 style={{ left: "130%", zIndex: "1" }}
//               >
//                 {source}
//               </span>
//             </h5>
//             <p className="card-text">{description}</p>
//             <p className="card-text text-muted">
//               By {!author ? "unknown" : author} on{" "}
//               {new Date(date).toGMTString()}
//             </p>
//             <a
//               href={newsUrl}
//               target="_blank"
//               rel="noreferrer"
//               className="btn btn-sm btn-dark"
//             >
//               Read more
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }


// Functional based component
const NewsItem= (props)=> {
    let { title, description, imageUrl, newsUrl, author, date, source } =props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              imageUrl == null
                ? "https://images.moneycontrol.com/static-mcnews/2023/09/sensex_nifty_sensexdown-770x433.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span
                className="position-absolute top-0 left-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ left: "130%", zIndex: "1" }}
              >
                {source}
              </span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text text-muted">
              By {!author ? "unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
export default NewsItem
