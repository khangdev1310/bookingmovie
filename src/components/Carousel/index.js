import React from "react";
import trangti from "../../img/trang-ti-16194117174325.jpg";
import latmat from "../../img/lat-mat-48h-16177782153424.png";
import bantay from "../../img/ban-tay-diet-quy-evil-expeller-16177781815781.png";

export default function Carousel() {
  return (
    <div className="movie-trailer">
      <div
        id="Carousel-movie-trailer"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={latmat} className="d-block w-100"  />
          </div>
          <div className="carousel-item">
            <img src={trangti} className="d-block w-100"  />
          </div>
          <div className="carousel-item">
            <img src={bantay} className="d-block w-100" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#Carousel-movie-trailer"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#Carousel-movie-trailer"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
