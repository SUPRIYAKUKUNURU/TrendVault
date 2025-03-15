import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import bannerImgOne from "./assets/bannerImgOne.webp";
import bannerImgTwo from "./assets/bannerImgTwo.webp";
import bannerImgThree from "./assets/bannerImgThree.webp";
import saleImgOne from "./assets/saleImgOne.webp";
import saleImgTwo from "./assets/saleImgTwo.webp";
import saleImgThree from "./assets/saleImgThree.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft, faTruck } from '@fortawesome/free-solid-svg-icons';
import OffersPage from "./OffersPage";

function Home() {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bannerImgOne} className="d-block w-100" alt="Banner Image One"/>
          </div>
          <div className="carousel-item">
            <img src={bannerImgTwo} className="d-block w-100" alt="Banner Image Two"/>
          </div>
          <div className="carousel-item">
            <img src={bannerImgThree} className="d-block w-100" alt="Banner Image Three"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className='d-flex justify-content-evenly gap-5 mt-5'>
        <p><b>2 </b>Two years warranty</p>
        <p><FontAwesomeIcon icon={faTruck} size="lg" /> Free Shipping</p>
        <p><FontAwesomeIcon icon={faRotateLeft} size="lg"/> Return policy in 30 days</p>
      </div>
      <div className="container">
        <div className="row justify-content-center align-items-center mt-5">
          <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
            <img src={saleImgOne} alt="saleProduct" className="img-fluid w-100 main-img" />
          </div>
          <div className="col-md-6 col-md-5 col-sm-12 d-flex flex-column">
            <img src={saleImgTwo} alt="saleProduct" className="img-fluid sub-img mb-3" />
            <img src={saleImgThree} alt="saleProduct" className="img-fluid sub-img" />
          </div>
        </div>
      </div>
      <OffersPage />

    </>
  );
}

export default Home;
