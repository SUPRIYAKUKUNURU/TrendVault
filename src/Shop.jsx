// import { useState } from "react";
// import {
//     spfOne,
//     spfTwo,
//     spfThree,
//     spfFour,
//     bestSellerOne,
//     bestSellerTwo,
//     bestSellerThree,
//     bestSellerFour,
//     newArrOne,
//     newArrTwo,
//     newArrThree,
//     newArrFour,
//   } from "./assets;
   
// import "bootstrap/dist/css/bootstrap.min.css";

// const products = [
//   { id: 1, name: "Product 1", price: "$10", image: "https://via.placeholder.com/150" },
//   { id: 2, name: "Product 2", price: "$20", image: "https://via.placeholder.com/150" },
//   { id: 3, name: "Product 3", price: "$30", image: "https://via.placeholder.com/150" },
//   { id: 4, name: "Product 4", price: "$40", image: "https://via.placeholder.com/150" },
//   { id: 5, name: "Product 5", price: "$50", image: "https://via.placeholder.com/150" },
//   { id: 6, name: "Product 6", price: "$60", image: "https://via.placeholder.com/150" },
//   { id: 7, name: "Product 7", price: "$70", image: "https://via.placeholder.com/150" },
//   { id: 8, name: "Product 8", price: "$80", image: "https://via.placeholder.com/150" },
// ];

// const Shop = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 4;
//   const totalPages = Math.ceil(products.length / productsPerPage);

//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center mb-4">Shop</h2>

//       <div className="row">
//         {currentProducts.map((product) => (
//           <div key={product.id} className="col-md-3 mb-4">
//             <div className="card shadow-sm">
//               <img src={product.image} className="card-img-top" alt={product.name} />
//               <div className="card-body text-center">
//                 <h5 className="card-title">{product.name}</h5>
//                 <p className="card-text">{product.price}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <nav className="d-flex justify-content-center">
//         <ul className="pagination">
//           <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
//             <button className="page-link" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
//               Previous
//             </button>
//           </li>

//           {[...Array(totalPages)].map((_, index) => (
//             <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
//               <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
//                 {index + 1}
//               </button>
//             </li>
//           ))}

//           <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
//             <button className="page-link" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}>
//               Next
//             </button>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Shop;
