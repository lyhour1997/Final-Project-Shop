import React from 'react'
import { FaFacebook, FaLinkedinIn, FaTiktok  } from "react-icons/fa";
import { IoCallSharp, IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
function Footer() {
  return (
    <div className="container-fluid bg-dark p-0 mb-5 pb-5 mb-lg-0 pb-lg-0 font-poppins">
      <div className="container p-md-0 py-4 py-md-3">
        <div className="row ">

          <div className="col-lg-4 py-2 py-lg-5 text-light ">
            <h4>Get In Touch</h4>
            <p className="py-3">
              No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et
              et dolor sed dolor. Rebum tempor no vero est magna amet no
            </p>           
            <ul className="list-unstyled">
                <li className="py-1">
                  <IoLocationSharp className="text-blue-500 fs-4 me-2" /> 
                  123 Street, New York, USA
                </li>
                <li className="py-1">
                  <MdEmail className="text-blue-500 fs-4 me-2"/>
                  info@example.com
                </li>
                <li className="py-1">
                  <IoCallSharp className="text-blue-500 fs-4 me-2"/>
                  +012 345 67890
                </li>
            </ul>
          </div>
          <div className="col-lg-8 row m-0 p-0 text-light">
            <div className="col-md-3 py-2 py-lg-5">
              <h4>Quick Shop</h4>
              <ul className="list-unstyled py-2">
                  <li className="py-1">
                    <a href="" className="text-light text-decoration-none hover-decoration"> &gt; Home</a>
                  </li>
                  <li className="py-1">
                    <a href="" className="text-light text-decoration-none hover-decoration"> &gt; Our Shop</a>
                  </li>
                  <li className="py-1">
                    <a href="" className="text-light text-decoration-none hover-decoration"> &gt; Shopping Cart</a>
                  </li>
                  <li className="py-1">
                    <a href="" className="text-light text-decoration-none hover-decoration"> &gt; Contact Us</a>
                  </li>
              </ul>
            </div>
            <div className="col-md-3 py-2 py-lg-5">
              <h4>My Account</h4>
              <ul className="list-unstyled py-2">
                  <li className="py-1">
                    <a href="" className="text-light text-decoration-none hover-decoration"> &gt; Home</a>
                  </li>
                  <li className="py-1">
                    <a href="" className="text-light text-decoration-none hover-decoration"> &gt; Our Shop</a>
                  </li>
                  <li className="py-1">
                    <a href="" className="text-light text-decoration-none hover-decoration"> &gt; Shopping Cart</a>
                  </li>
                  <li className="py-1">
                    <a href="" className="text-light text-decoration-none hover-decoration"> &gt; Contact Us</a>
                  </li>
              </ul>
            </div>
            <div className="col-md-6 py-2 py-lg-5">
              <h4>Newsletter</h4>
              <p className="py-3">
               Duo stet tempor ipsum sit amet magna ipsum tempor est
              </p> 
              <form action="" className="d-flex border">
                <input type="text" name="" id="" className="form-control rounded-0 shadow-none border-0 py-2" placeholder="Your Email Address"/>
                <button className="btn bg-blue-700 text-light border-0 rounded-0  border-start">Register</button>
              </form>
              <h5 className="mt-4">Follow Us</h5>
              <ul className="nav py-2">
                  <li className="bg-blue-700 p-2 me-2">
                    <a href="" className="text-light text-decoration-none hover-decoration">
                      <FaFacebook className="fs-5"/>
                    </a>
                  </li>
                  <li className="bg-blue-700 p-2 me-2">
                    <a href="" className="text-light text-decoration-none hover-decoration">
                      <FaLinkedinIn className="fs-5"/>
                    </a>
                  </li>
                  <li className="bg-blue-700 p-2 me-2">
                    <a href="" className="text-light text-decoration-none hover-decoration">
                      <FaTiktok className="fs-5"/>
                    </a>
                  </li>
              </ul>
            </div>
          </div>
          <div className="row m-0 text-light border-top border-secondary pt-3 text-center text-md-start">
            <div className="col-12 col-md-6 ">
              <p>
                © <a href="" className="text-blue-500 text-decoration-none hover-decoration fw-medium">Domain.</a> All Rights Reserved. Designed by <a href="" className="text-blue-500 text-decoration-none hover-decoration fw-medium">Rok Rak Developer</a>
              <br />
                Distributed By: <a href="" className="text-blue-500 text-decoration-none hover-decoration fw-medium">Etec</a>
              </p>
            </div>
            <div className="col-12 col-md-6  text-md-end">
              <img src="img/payment.png" alt="" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;