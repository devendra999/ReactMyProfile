import React, { Component } from "react";
import Slider from "react-slick";

const hotelCards = [
  {
    imageSrc:
      'https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
    title: 'Studio Room',
    description: 'Lorem ipsum dolor sit amet, consectur dolori',
    pricingText: 'USD 50/Day',
    features: ['Free Wifi', 'Free breakfast'],
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    title: 'Deluxe Room',
    description: 'Lorem ipsum dolor sit amet, consectur dolori',
    pricingText: 'USD 80/Day',
    features: ['Free Wifi', 'Free breakfast'],
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
    title: 'King Deluxe Room',
    description: 'Lorem ipsum dolor sit amet, consectur dolori',
    pricingText: 'USD 150/Day',
    features: ['Free Wifi', 'Free breakfast', 'Discounted Meals'],
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    title: 'Royal Suite',
    description: 'Lorem ipsum dolor sit amet, consectur dolori',
    pricingText: 'USD 299/Day',
    features: [
      'Free Wifi',
      'Free breakfast',
      'Discounted Meals',
      "MacBook for work use (hotel's property)",
    ],
  },
]

export default class MySlider extends Component {

  

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows:true,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (

      // Note : If you want to use slick carouse you need to install bellow plugin
      //        1. npm install slick-carousel --save
      //        2. npm install react-slick --save



      <div className="main-slider">
        <div className="container">
          <h2 className="text-center"> Slider </h2>
          <Slider className="hotel-slider" {...settings}>
            
            {hotelCards.map((e, i) => {
              const {imageSrc, title, description, pricingText, features} = e;
              return <div className="single-item" key={i}>
              <div className="img-wrapper">
                <img src={imageSrc} alt="" />
              </div>
              <div className="info">
                <h4>{title}</h4>
                <p>{description}</p>
                <div className="d-flex flex-wrap">
                  <span className="d-block w-100">{pricingText}</span>
                  {hotelCards[i].features.map((e, i) => {
                    return <span key={i}>{e}</span>
                  })}
                </div>
              </div>
            </div>
            })}


          </Slider>
        </div>
      </div>
    );
  }
}