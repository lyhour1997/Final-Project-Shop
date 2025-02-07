
import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Contact = () => {
    return (
        <div className='container my-3 p-md-0 font-poppins'>
            <div className="row">
                <div className="col-12 ">
                    <div className="">
                        <p className=' border p-3 bg-light' >Home / Contact</p>
                    </div>
                    <h1 className=' mt-4 text-uppercase'>Contact Us</h1>
                </div>
                
                <div className='col-12 my-3  '>
                    <div className="row">
                        <div className="col-md-5"> 
                            <div style={{ height:525}} className="bg-blue-700 p-4 text-center text-light">
                                <h2 className=' py-2'>Contact Us</h2>
                                <p>Address : Your address here</p>
                                <p>Phone : +855 123456789</p>
                                <p>Email : example@gamil.com</p>
                                <p>Website : www.yourwebsite.com</p>

                                <div className=" my-5">
                                    <button className=' m-1 btn border rounded-0 bg-light '><FaFacebook className=' text-color-700 fs-5  ' /></button>
                                    <button className=' m-1 btn border rounded-0 bg-light '><FaYoutube className=' text-color-700 fs-5  ' /></button>
                                    <button className=' m-1 btn border rounded-0 bg-light '><FaInstagram className=' text-color-700 fs-5  ' /></button>
                                    <button className=' m-1 btn border rounded-0 bg-light '><FaTiktok className=' text-color-700 fs-5  ' /></button>
                                    <button className=' m-1 btn border rounded-0 bg-light '><FcGoogle className=' text-color-700 fs-5  ' /></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 my-md-0 my-4 ">
                            <div className=" p-4 border bg-light">
                                <h1 className=' text-center'>Get in Touch</h1>

                                    <form>
        <label htmlFor="fullName">Full Name</label>
        <input 
            type="text" 
            id="fullName" 
            name="fullName" 
            placeholder="Full name" 
            className="mb-2 rounded-0 shadow-none form-control"
        />

        <label htmlFor="email">Email</label>
        <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Email" 
            className="mb-2 rounded-0 shadow-none form-control"
        />

        <label htmlFor="tel">Tel</label>
        <input 
            type="tel" 
            id="tel" 
            name="tel" 
            placeholder="Phone number" 
            className="mb-2 rounded-0 shadow-none form-control"
        />

        <label htmlFor="message">Message</label>
        <textarea 
            id="message" 
            name="message" 
            placeholder="Please tell me..." 
            className="mb-2 form-control rounded-0 border shadow-none" 
            cols="10" 
            rows="5"
        ></textarea>
                                    </form>

                                
                                <a className=' text-decoration-none d-flex justify-content-end align-items-center' href="">
                                    <button className='btn border-black rounded-0 bg-blue-700 px-4 py-2 text-light opacity'>Send </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact