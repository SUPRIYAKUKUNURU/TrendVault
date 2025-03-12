import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import payment from "./assets/payment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faYoutube, faGithub, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons"; 

const Footer = () => {
  return (
    <div className="container my-5 p-4 rounded" style={{ backgroundColor: "#EEEEEE" }}>
      <section className="mb-4">
        <h1>More About Shop</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam, cumque, atque alias asperiores nam consequatur in optio nostrum vel temporibus rerum ad ipsa quisquam fugiat.
        </p>
        <div className="d-flex gap-3">
          <FontAwesomeIcon icon={faYoutube} size="2x" color="black" />
          <FontAwesomeIcon icon={faGithub} size="2x" color="black" />
          <FontAwesomeIcon icon={faFacebook} size="2x" color="black" />
          <FontAwesomeIcon icon={faLinkedin} size="2x" color="black" />
        </div>
      </section>

      <div className="row">
        <div className="col-md-6">
          <h2>Shop</h2>
          <p>Accesories</p>
          <p>Clothes</p>
          <p>Electronics</p>
          <p>Home Appliances</p>
          <p>New Arrivals</p>
        </div>
        <div className="col-md-6">
          <h2>Your Account</h2>
          <p>Profile</p>
          <p>Orders</p>
          <p>Addresses</p>
          <p>Account Details</p>
          <p>Payment Options</p>
        </div>
      </div>

      <section className="text-center my-4">
        <h2>Subscribe to our Newsletter</h2>
        <p>Monthly digest of what's new and exciting from us.</p>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <input type="email" className="form-control" placeholder="Email address" required />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-primary w-100">Subscribe</button>
          </div>
        </div>
        <div className="mt-3">
          <img src={payment} alt="payment" className="img-fluid" />
        </div>
      </section>

      <footer className="text-center py-3">
        <p className="mb-0">© 2024 Company, Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
