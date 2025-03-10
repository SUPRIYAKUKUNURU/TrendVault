import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import payment from "./assests/payment.png"

const Footer = () => {
  return (
    <>    
      {/* Sections */}
      <div className="container container-expand-lg  d-flex justify-content-center  " style={{gap:"150px"}}>
        <div>
        <section className="my-2">
            <h1>Shop</h1>

          <p>Accesories</p>
        </section>
        <section className="my-2">
          <p>Clothes</p>
        </section>
        <section className="my-2">
          <p>Electronics</p>
        </section>
        <section className="my-2">
          <p>home appliances</p>
        </section>
        <section className="my-2">
          <p>New Arrials</p>
        </section>
        </div>
        <div>
        <section className="my-2">
            <h1>your Account</h1>

          <p>Profile</p>
        </section>
        <section className="my-2">
          <p>Orders</p>
        </section>
        <section className="my-2">
          <p>Addresses</p>
        </section>
        <section className="my-2">
          <p>Account Details</p>
        </section>
        <section className="my-2">
          <p>payment Options</p>
        </section>

        </div>
      </div>

      {/* Newsletter Subscription */}
      <section className="container my-5 text-center">
        <h2>Subscribe to our Newsletter</h2>
        <p>Monthly digest of what's new and exciting from us.</p>
        <form className="row justify-content-center">
          <div className="col-md-4">
            <input type="email" className="form-control" placeholder="Email address" required />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </div>
        </form>
        <section>
      <img src= {payment} alt="payment" />
      </section>
      </section>
      <footer className="bg-light text-center py-3">
        <p className="mb-0">© 2024 Company, Inc. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
