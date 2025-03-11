import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import payment from "./assests/payment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faYoutube ,faGithub,faFacebook,faLinkedin} from "@fortawesome/free-brands-svg-icons"; 
const Footer = () => {
  return (
    <>
    <div style={{backgroundColor:"#EEEEEE" ,width:"1000px",height:"810px",margin:"auto",borderRadius:"3px"}}>
      <section style={{marginLeft:"30px"}}>
        <h1>
          More About Shop
        </h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        magnam, cumque, atque alias asperiores nam consequatur in optio nostrum
        vel temporibus rerum ad ipsa quisquam fugiat. Praesentium labore dicta
        voluptate? Ipsa expedita voluptate voluptatem in numquam dolorem,
        dolores reiciendis commodi, labore magni sequi voluptatum similique amet
        possimus laudantium. Porro minima ratione iure. Itaque omnis nostrum
        assumenda nemo sapiente quas dolore!
     
      <section style={{ display:"flex",gap:"20px"}}>
      <FontAwesomeIcon icon={faYoutube} size="2x" color="black" />
      <FontAwesomeIcon icon={faGithub} size="2x" color="black" />
      <FontAwesomeIcon icon={faFacebook} size="2x" color= "black"/>
      <FontAwesomeIcon icon={faLinkedin} size= "2x" color="black"/>
      </section>
      </section>
      <div
        className="container container-expand-lg  d-flex justify-content-center  "
        style={{ gap: "550px" }}
      >
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
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
              required
            />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </div>
        </form>
        <section>
          <img src={payment} alt="payment" />
        </section>
      </section>
      <footer className=" text-center py-3">
        <p className="mb-0">© 2024 Company, Inc. All rights reserved.</p>
      </footer>
      </div>
    </>
  );
};

export default Footer;
