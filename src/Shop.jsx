import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="container mt-4 mb-5" style={{ backgroundColor: "#f8f9fa", border: "1px solid #f8f9fa", borderRadius: "3px", width: "600px" }}>
      <div className="mt-4 mb-4">
        <div className="col-md-6 col-sm-12">
          <div style={{ marginLeft: "30px" }}>
            <h2><b>Contact</b></h2>
            <form onSubmit={handleSubmit}>
              <a href="#" style={{ textDecoration: "none" }}>About</a>
              <h6>Contact</h6>

              <h2>Fill up a Form</h2>
              <label><b>Name</b></label>
              <input type="text" name="name" placeholder="Enter your name here" className="form-control" value={formData.name} onChange={handleChange} />
              {errors.name && <small className="text-danger">{errors.name}</small>}
              <hr />

              <label><b>Email</b></label>
              <input type="email" name="email" placeholder="Enter your Email here" className="form-control" value={formData.email} onChange={handleChange} />
              {errors.email && <small className="text-danger">{errors.email}</small>}
              <hr />

              <label><b>Message</b></label>
              <textarea name="message" placeholder="Enter your Message here" className="form-control" value={formData.message} onChange={handleChange}></textarea>
              {errors.message && <small className="text-danger">{errors.message}</small>}
              <hr />

              <button type="submit" className="btn btn-dark w-100 mt-2">Post</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
