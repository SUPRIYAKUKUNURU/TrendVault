import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Contact() {
  return (
    <div className="container mt-4 mb-5 " style={{backgroundColor:"#f8f9fa",border:"1px solid #f8f9fa",borderRadius:"3px",width:"600px"}}>
      <div className="  mt-4 mb-4">
        <div className="col-md-6 col-sm-12">
          <div style={{ marginLeft: "30px" }}>
            <h2><b>Contact</b></h2>
            <form>
              <a href="#" style={{ textDecoration: "none" }}>About</a>
              <h6>Contact</h6>

              <h2>Fill up a Form</h2>
              <label>
                <b>Name</b><br />
                <input type="text" placeholder="Enter your name here" 
                  className="form-control" style={{ border: "white" }} />
                <hr />
              </label><br />

              <label>
                <b>Email</b><br />
                <input type="text" placeholder="Enter your Email here" 
                  className="form-control" style={{ border: "white" }} />
                <hr />
              </label><br />

              <label>
                <b>Message</b><br />
                <input type="text" placeholder="Enter your Message here" 
                  className="form-control" style={{ border: "white" }} />
                <hr />
              </label>

              <button className="btn btn-dark w-100 mt-2" 
                style={{ backgroundColor: "black", color: "white", borderRadius: "3px" }}>
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
