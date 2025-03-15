import { useState } from "react";
import spfOne from "./assets/spfOne.webp";
import spfTwo from "./assets/spfTwo.webp";
import spfThree from "./assets/spfThree.webp";
import spfFour from "./assets/spfFour.webp";

import bestSellerOne from "./assets/bestSellerOne.webp";
import bestSellerTwo from "./assets/bestSellerTwo.webp";
import bestSellerThree from "./assets/bestSellerThree.webp";
import bestSellerFour from "./assets/bestSellerFour.webp";

import newArrOne from "./assets/newArrOne.webp";
import newArrTwo from "./assets/newArrTwo.webp";
import newArrThree from "./assets/newArrThree.webp";
import newArrFour from "./assets/newArrFour.webp";

   
import "bootstrap/dist/css/bootstrap.min.css";

const products =  [
 
  {
    _id: 1005,
    img: bestSellerOne,
    productName: "Flower Base",
    price: "35.00",
    color: "Blank and White",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1006,
    img: bestSellerTwo,
    productName: "New Backpack",
    price: "180.00",
    color: "Gray",
    badge: false,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1007,
    img: bestSellerThree,
    productName: "Household materials",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1008,
    img: bestSellerFour,
    productName: "Travel Bag",
    price: "220.00",
    color: "Black",
    badge: false,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1009,
    img: newArrOne,
    productName: "Round Table Clock",
    price: "44.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1010,
    img: newArrTwo,
    productName: "Smart Watch",
    price: "250.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1011,
    img: newArrThree,
    productName: "cloth Basket",
    price: "80.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1012,
    img: newArrFour,
    productName: "Funny toys for babies",
    price: "60.00",
    color: "Mixed",
    badge: false,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1001,
    img: spfOne,
    productName: "Cap for Boys",
    price: "35.00",
    color: "Blank and White",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1002,
    img: spfTwo,
    productName: "Tea Table",
    price: "180.00",
    color: "Gray",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1003,
    img: spfThree,
    productName: "Headphones",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1004,
    img: spfFour,
    productName: "Sun glasses",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1013,
    img: newArrTwo,
    productName: "Funny toys for babies",
    price: "60.00",
    color: "Mixed",
    badge: false,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },

  {
    _id: 1014,
    img: newArrTwo,
    productName: "Smart Watch",
    price: "250.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1015,
    img: newArrFour,
    productName: "Funny toys for babies",
    price: "60.00",
    color: "Mixed",
    badge: false,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1016,
    img: newArrTwo,
    productName: "Smart Watch",
    price: "250.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1017,
    img: bestSellerFour,
    productName: "Travel Bag",
    price: "220.00",
    color: "Black",
    badge: false,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1018,
    img: newArrOne,
    productName: "Round Table Clock",
    price: "44.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1019,
    img: newArrTwo,
    productName: "Smart Watch",
    price: "250.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1020,
    img: newArrThree,
    productName: "cloth Basket",
    price: "80.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1021,
    img: spfThree,
    productName: "Headphones",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1022,
    img: spfFour,
    productName: "Sun glasses",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1023,
    img: bestSellerOne,
    productName: "Flower Base",
    price: "35.00",
    color: "Blank and White",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1024,
    img: spfOne,
    productName: "Cap for Boys",
    price: "35.00",
    color: "Blank and White",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1025,
    img: spfTwo,
    productName: "Tea Table",
    price: "180.00",
    color: "Gray",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1026,
    img: spfThree,
    productName: "Headphones",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1027,
    img: spfFour,
    productName: "Sun glasses",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1028,
    img: bestSellerOne,
    productName: "Flower Base",
    price: "35.00",
    color: "Blank and White",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1029,
    img: bestSellerTwo,
    productName: "New Backpack",
    price: "180.00",
    color: "Gray",
    badge: false,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1030,
    img: bestSellerThree,
    productName: "Household materials",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1031,
    img: bestSellerFour,
    productName: "Travel Bag",
    price: "220.00",
    color: "Black",
    badge: false,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1032,
    img: newArrOne,
    productName: "Round Table Clock",
    price: "44.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1033,
    img: newArrTwo,
    productName: "Smart Watch",
    price: "250.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1034,
    img: newArrThree,
    productName: "cloth Basket",
    price: "80.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1035,
    img: newArrFour,
    productName: "Funny toys for babies",
    price: "60.00",
    color: "Mixed",
    badge: false,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1036,
    img: newArrTwo,
    productName: "Funny toys for babies",
    price: "60.00",
    color: "Mixed",
    badge: false,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1037,
    img: newArrFour,
    productName: "Funny toys for babies",
    price: "60.00",
    color: "Mixed",
    badge: false,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1038,
    img: newArrTwo,
    productName: "Smart Watch",
    price: "250.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1039,
    img: bestSellerFour,
    productName: "Travel Bag",
    price: "220.00",
    color: "Black",
    badge: false,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1040,
    img: newArrOne,
    productName: "Round Table Clock",
    price: "44.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1041,
    img: newArrTwo,
    productName: "Smart Watch",
    price: "250.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1042,
    img: newArrThree,
    productName: "cloth Basket",
    price: "80.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1043,
    img: spfThree,
    productName: "Headphones",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1044,
    img: spfFour,
    productName: "Sun glasses",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1045,
    img: bestSellerOne,
    productName: "Flower Base",
    price: "35.00",
    color: "Blank and White",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1046,
    img: spfOne,
    productName: "Cap for Boys",
    price: "35.00",
    color: "Blank and White",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
];

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Shop</h2>

      <div className="row">
        {currentProducts.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card shadow-sm">
              <img src={product.img} className="card-img-top" alt={product.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{product.productName}</h5>
                <p className="card-text">{product.color}</p>
                <p className="card-text">${product.price}</p>
                <button className="btn btn-dark">Shop Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
              Previous
            </button>
          </li>

          {[...Array(totalPages)].map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}

          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Shop;
