import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Journals() {
  return (
    <div className="container mt-4 mb-5 " style={{backgroundColor:"#f8f9fa",border:"1px solid #EEEEEE",borderRadius:"3px",width:"600px"}}>
      <div className=" mt-4 mb-4">
        <div className="col-md-6 col-sm-12">
          <div style={{ marginLeft: "30px" }}>
            <h2><b>Journals</b></h2>
            <form>
              <a href="/contact" style={{ textDecoration: "none" }}>Contact</a>
              <h6>Journal</h6>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis aliquam fugit fuga asperiores quas earum quo magnam, voluptatum commodi consectetur vitae adipisci officiis doloremque quasi sit consequuntur! Et, tempore fugit.
            Nulla nam numquam maxime. Accusamus, dolorem voluptatum. Harum atque praesentium beatae magnam, sapiente autem quis placeat at cumque modi cum temporibus vel vitae facere eos, aliquid est quae officia odit.</p>

              <button className="btn btn-dark w-100 mt-2" 
                style={{ backgroundColor: "black", color: "white", width: "150px", borderRadius: "3px" }}>
                Continue Shopping
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journals;
