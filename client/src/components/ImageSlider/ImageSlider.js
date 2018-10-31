import React, { Component } from "react";
import Slider from "react-slick";
import "./ImageSlider";

// class Article extends Component {
//   render() {
//     const cards = [
//       {
//         image:
//           "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
//         title: "Burgundy Flemming",
//         subtitle: "Advertising"
//       },
//       {
//         image:
//           "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg",
//         title: "Nigel Nigel",
//         subtitle: "Sound & Vision"
//       },
//       {
//         image:
//           "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg",
//         title: "Caspian Bellevedere",
//         subtitle: "Accounting"
//       }
//     ];

//     var image = this.props.data.image,
//       title = this.props.data.title,
//       subtitle = this.props.data.subtitle;
//     return (
//       <figure className="snip1584">
//         <img src={image} />
//         <figcaption>
//           <h3>{title}</h3>
//           <h5>{subtitle}</h5>
//         </figcaption>
//         <a href="#" />
//       </figure>
//     );
//   }
// }

// class News extends Component {
//   render() {
//     var data = this.props.data;
//     var newsTemplate;
//     var settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1
//     };
//     if (data.length > 0) {
//       newsTemplate = data.map(function(item, index) {
//         return (
//           <div key={index}>
//             <Article data={item} />
//           </div>
//         );
//       });
//     } else {
//       newsTemplate = <p>Please add some cards</p>;
//     }
//     return (
//       <div className="news">
//         <Slider {...settings}>{newsTemplate}</Slider>
//         <strong className={"news__count " + (data.length > 0 ? "" : "none")}>
//           Total cards: {data.length}
//         </strong>
//       </div>
//     );
//   }
// }

// class Imageslider extends Component {
//   render() {
//     return (
//       <div className="app1">
//         <h3>Cards</h3>
//         <News data={cards} />
//       </div>
//     );
//   }
// }

// export default Imageslider;

// class Article extends React(
// 	render() {
// 		const image = this.props.data.image,
// 				title = this.props.data.title,
// 				subtitle = this.props.data.subtitle;
// 		return (
// 			<figure className="snip1584">
// 				<img src={image} />
// 				<figcaption>
// 					<h3>{title}</h3>
// 					<h5>{subtitle}</h5>
// 				</figcaption><a href="#"></a>
// 			</figure>
// 		)
// 	}
// });

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <div className="firstrow" style={{ margin: "0 0 0 0" }}>
          <h5>You Viewed </h5>
          <Slider {...settings}>
            <div className="FirstCard" style={{ width: " 18rem" }}>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
                className="img-thumbnail"
                alt=" image1"
                // width="25"
                // height="100"
                style={{ flex: 0 }}
              />

              <div className="ItemsCard">
                <span className="Product_item_">
                  <a href="#" className="title">
                    Title
                  </a>
                </span>
                <div className="Product_Brand_Card">
                  <a href="#" className="ttt">
                    Some quick example text
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
                className="img-thumbnail"
                alt=" image1"
                // width="25"
                // height="100"
                style={{ flex: 0 }}
              />

              <div className="ItemsCard">
                <span className="Product_item_">
                  <a href="#" className="title">
                    Title
                  </a>
                </span>
                <div className="Product_Brand_Card">
                  <a href="#" className="ttt">
                    Some quick example text
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
                className="img-thumbnail"
                alt=" image1"
                // width="25"
                // height="100"
                style={{ flex: 0 }}
              />

              <div className="ItemsCard">
                <div className="Product_item_">
                  <a href="#" className="title">
                    Title
                  </a>
                </div>
                <div className="Product_Brand_Card">
                  <a href="#" className="ttt">
                    Some quick example text
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
                className="img-thumbnail"
                alt=" image1"
                // width="25"
                // height="100"
                style={{ flex: 0 }}
              />

              <div className="ItemsCard">
                <span className="Product_item_">
                  <a href="#" className="title">
                    Title
                  </a>
                </span>
                <div className="Product_Brand_Card">
                  <a href="#" className="ttt">
                    Some quick example text
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
                className="img-thumbnail"
                alt=" image1"
                // width="25"
                // height="100"
                style={{ flex: 0 }}
              />

              <div className="ItemsCard">
                <span className="Product_item_">
                  <a href="#" className="title">
                    Title
                  </a>
                </span>
                <div className="Product_Brand_Card">
                  <a href="#" className="ttt">
                    Some quick example text
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
                className="img-thumbnail"
                alt=" image1"
                // width="25"
                // height="100"
                style={{ flex: 0 }}
              />

              <div className="ItemsCard">
                <span className="Product_item_">
                  <a href="#" className="title">
                    Title
                  </a>
                </span>
                <div className="Product_Brand_Card">
                  <a href="#" className="ttt">
                    Some quick example text
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div className="secondrow" style={{ margin: "300px 0 0 0" }}>
          <h5>Similar products </h5>
          <Slider {...settings}>
            <div className="FirstCard2" style={{ width: " 18rem" }}>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
                className="img-thumbnail"
                alt=" image1"
                // width="25"
                // height="100"
                style={{ flex: 0 }}
              />

              <div className="ItemsCard">
                <span className="Product_item_">
                  <a href="#" className="title">
                    Title
                  </a>
                </span>
                <div className="Product_Brand_Card">
                  <a href="#" className="ttt">
                    Some quick example text
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
                className="img-thumbnail"
                alt=" image1"
                // width="25"
                // height="100"
                style={{ flex: 0 }}
              />

              <div className="ItemsCard">
                <span className="Product_item_">
                  <a href="#" className="title">
                    Title
                  </a>
                </span>
                <div className="Product_Brand_Card">
                  <a href="#" className="ttt">
                    Some quick example text
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
                className="img-thumbnail"
                alt=" image1"
                // width="25"
                // height="100"
                style={{ flex: 0 }}
              />

              <div className="ItemsCard">
                <span className="Product_item_">
                  <a href="#" className="title">
                    Title
                  </a>
                </span>
                <div className="Product_Brand_Card">
                  <a href="#" className="ttt">
                    Some quick example text
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
                className="img-thumbnail"
                alt=" image1"
                // width="25"
                // height="100"
                style={{ flex: 0 }}
              />

              <div className="ItemsCard">
                <span className="Product_item_">
                  <a href="#" className="title">
                    Title
                  </a>
                </span>
                <div className="Product_Brand_Card">
                  <a href="#" className="ttt">
                    Some quick example text
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
                className="img-thumbnail"
                alt=" image1"
                // width="25"
                // height="100"
                style={{ flex: 0 }}
              />

              <div className="ItemsCard">
                <span className="Product_item_">
                  <a href="#" className="title">
                    Title
                  </a>
                </span>
                <div className="Product_Brand_Card">
                  <a href="#" className="ttt">
                    Some quick example text
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
                className="img-thumbnail"
                alt=" image1"
                // width="25"
                // height="100"
                style={{ flex: 0 }}
              />

              <div className="ItemsCard">
                <span className="Product_item_">
                  <a href="#" className="title">
                    Title
                  </a>
                </span>
                <div className="Product_Brand_Card">
                  <a href="#" className="ttt">
                    Some quick example text
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

// <div className="firstrow">
//           <p>You Viewed</p>
//           <Slider {...settings}>
//             <div className="FirstCard">
//               <div className="card-content" style={{ display: "flex" }}>
//                 <img
//                   src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
//                   className="img-thumbnail"
//                   alt="wine"
//                   width="25"
//                   height="100"
//                   style={{ flex: 0 }}
//                 />

//                 {/* //           {"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",  */}
//                 {/* "title":"Burgundy Flemming",
//    "subtitle":"Advertising"}, */}
//               </div>
//             </div>
//             <div>
//               <div className="SecondCard">
//                 <div className="card-content" style={{ display: "flex" }}>
//                   <img
//                     src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
//                     className="img-thumbnail"
//                     alt=" image1"
//                     // width="25"
//                     // height="100"
//                     style={{ flex: 0 }}
//                   />

//                   <div className="ItemsCard">
//                     <span className="Product_item_">
//                       <a href="#" className="title">
//                         Title
//                       </a>
//                     </span>
//                     <div className="Product_Brand_Card">
//                       <a href="#" className="ttt">
//                         Some quick example text
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div className="ThirdCard">
//                 <div className="card-content" style={{ display: "flex" }}>
//                   <img
//                     src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
//                     className="img-thumbnail"
//                     alt=" image1"
//                     // width="25"
//                     // height="100"
//                     style={{ flex: 0 }}
//                   />

//                   <div className="ItemsCard">
//                     <span className="Product_item_">
//                       <a href="#" className="title">
//                         Title
//                       </a>
//                     </span>
//                     <div className="Product_Brand_Card">
//                       <a href="#" className="ttt">
//                         Some quick example text
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div className="ForthCard">
//                 <div className="card-content" style={{ display: "flex" }}>
//                   <img
//                     src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
//                     className="img-thumbnail"
//                     alt=" image1"
//                     // width="25"
//                     // height="100"
//                     style={{ flex: 0 }}
//                   />

//                   <div className="ItemsCard">
//                     <span className="Product_item_">
//                       <a href="#" className="title">
//                         Title
//                       </a>
//                     </span>
//                     <div className="Product_Brand_Card">
//                       <a href="#" className="ttt">
//                         Some quick example text
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div className="Fifth">
//                 <div className="card-content" style={{ display: "flex" }}>
//                   <img
//                     src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
//                     className="img-thumbnail"
//                     alt=" image1"
//                     // width="25"
//                     // height="100"
//                     style={{ flex: 0 }}
//                   />

//                   <div className="ItemsCard">
//                     <span className="Product_item_">
//                       <a href="#" className="title">
//                         Title
//                       </a>
//                     </span>
//                     <div className="Product_Brand_Card">
//                       <a href="#" className="ttt">
//                         Some quick example text
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div className="SixthCard">
//                 <div className="card-content" style={{ display: "flex" }}>
//                   <img
//                     src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
//                     className="img-thumbnail"
//                     alt=" image1"
//                     // width="25"
//                     // height="100"
//                     style={{ flex: 0 }}
//                   />

//                   <div className="ItemsCard">
//                     <span className="Product_item_">
//                       <a href="#" className="title">
//                         Title
//                       </a>
//                     </span>
//                     <div className="Product_Brand_Card">
//                       <a href="#" className="ttt">
//                         Some quick example text
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Slider>
//         </div>
