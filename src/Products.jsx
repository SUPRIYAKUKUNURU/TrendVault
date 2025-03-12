import React from "react";
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

function Products() {
  const products = [
    { _id: 1001, img: spfOne, productName: "Cap for Boys", price: "35.00", color: "Black and White", badge: true, des: "Stylish cap for casual wear." },
    { _id: 1002, img: spfTwo, productName: "Tea Table", price: "180.00", color: "Gray", badge: true, des: "Elegant tea table with a wooden finish." },
    { _id: 1003, img: spfThree, productName: "Headphones", price: "25.00", color: "Mixed", badge: true, des: "Noise-canceling headphones for music lovers." },
    { _id: 1004, img: spfFour, productName: "Sun Glasses", price: "220.00", color: "Black", badge: true, des: "Classic sunglasses with UV protection." },
    { _id: 1005, img: bestSellerOne, productName: "Flower Vase", price: "35.00", color: "White", badge: true, des: "Beautiful ceramic vase for home decor." },
    { _id: 1006, img: bestSellerTwo, productName: "Sports Shoes", price: "80.00", color: "Blue", badge: false, des: "High-quality running shoes." },
    { _id: 1007, img: bestSellerThree, productName: "Smart Watch", price: "120.00", color: "Black", badge: true, des: "Feature-packed smartwatch with fitness tracking." },
    { _id: 1008, img: bestSellerFour, productName: "Men's Wallet", price: "50.00", color: "Brown", badge: false, des: "Premium leather wallet." },
    { _id: 1009, img: newArrOne, productName: "Bluetooth Speaker", price: "60.00", color: "Black", badge: false, des: "Portable Bluetooth speaker." },
    { _id: 1010, img: newArrTwo, productName: "Backpack", price: "75.00", color: "Grey", badge: true, des: "Durable backpack for travel." },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {products.map((product) => (
        <div key={product._id} className="border p-4 rounded-lg shadow-lg">
          <img src={product.img} alt={product.productName} className="w-full h-40 object-cover rounded-lg" />
          <h2 className="text-lg font-semibold mt-2">{product.productName}</h2>
          <p className="text-gray-600">{product.des}</p>
          <p className="text-blue-600 font-bold">${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
