import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

// Correct Image Imports (Relative to src folder)
import spfOne from "./assets/spfOne.webp";
import spfThree from "./assets/spfThree.webp";
import spfFour from "./assets/spfFour.webp";
import newArrFour from "./assets/newArrFour.webp";

function OffersPage() {
  const SplOfferData = [
    {
      _id: "201",
      img: spfOne,
      productName: "Cap for Boys",
      price: "35.00",
      color: "Black and White",
      badge: true,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      _id: "202",
      img: newArrFour,
      productName: "Tea Table",
      price: "180.00",
      color: "Gray",
      badge: true,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      _id: "203",
      img: spfThree,
      productName: "Headphones",
      price: "25.00",
      color: "Mixed",
      badge: true,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      _id: "204",
      img: spfFour,
      productName: "Sun glasses",
      price: "220.00",
      color: "Black",
      badge: true,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div className="container mt-4 mb-5" style={{ backgroundColor: "#f8f9fa", border: "1px solid #EEEEEE", borderRadius: "3px", width: "600px" }}>
      <div className="mt-4 mb-4">
        <div className="col-md-6 col-sm-12">
          <div style={{ marginLeft: "30px" }}>
            <h2><b>Offers</b></h2>
            <a href="#" style={{ textDecoration: "none" }}>Home</a>
            <h6>Offers</h6>
            <h2>Special Offers</h2>
          </div>
        </div>
      </div>

      <div className="row">
        {SplOfferData.map((item) => (
          <div key={item._id} className="col-md-6 col-sm-12 mb-3">
            <div className="card" style={{ padding: "10px" }}>
            <button 
                className="btn btn-dark position-absolute" 
                style={{ top: "10px", left: "20px", zIndex: "10",marginTop:"10px" }}>
                New
              </button>
              <img src={item.img} alt={item.productName} className="card-img-top" style={{ height: "200px", width:"250px" }} />
              <div className="card-body">
                <h5 className="card-title">{item.productName}</h5>
                <p className="card-text">{item.des}</p>
                <p><b>Price:</b> ${item.price}</p>
                <p><b>Color:</b> {item.color}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default OffersPage;
