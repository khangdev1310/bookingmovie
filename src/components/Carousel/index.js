import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import Video from './Video'
import {items} from './itemVideo'

// const items = [
//   {
//     src: "./images/footer/gaigia.jpg",
//     trailer: 'https://www.youtube.com/embed/av4zbG8dAhk',
//   },
//   {
//     src: "./images/footer/lat-mat-48h-16177782153424.png",
//     trailer: 'https://www.youtube.com/embed/kBY2k3G6LsM'
//   },
//   {
//     src: "./images/footer/ban-tay-diet-quy-evil-expeller-16177781815781.png",
//     trailer: 'https://www.youtube.com/embed/uqJ9u7GSaYM'
//   },
// ];

const CarouselHeader = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [videoStart, setVideoStart] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const handleClick = () => {
    setVideoStart(!videoStart)
  }
  

  const slides = items.map((item,i) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className="banner-carousel">
          <img src={item.src} alt={item.altText} />
        </div>
        <button className="playVideo" onClick={handleClick}>
          <img src="./images/footer/play.png" style={{ maxWidth: "100%" }} />
          <Video showFrame={videoStart} trailer={item.trailer} keyIndex={i}/>
        </button>
      </CarouselItem>
    );
  });
  
  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>



  );
};

export default CarouselHeader;
