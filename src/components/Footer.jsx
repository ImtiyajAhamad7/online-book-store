import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              We are passionate about books and aim to provide the best
              collection of literature to our readers. Discover more about our
              mission and vision.
            </p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-light">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/booklist" className="text-light">
                  Book List
                </Link>
              </li>
              <li>
                <Link to="/AddBooks" className="text-light">
                  Add Books
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="text-uppercase">Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                Email:{" "}
                <a href="mailto:info@bookstore.com" className="text-light">
                  info@bookstore.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+1234567890" className="text-light">
                  +91 6392035767
                </a>
              </li>
              <li>Jay Prakash nagar, chandauli, 232104</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="mb-0">
            © {new Date().getFullYear()} Bookie. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
