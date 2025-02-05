
import React, {useContext, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { HiOutlineViewList } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import ProductContext from '../stores/ProductProvider';

const Header = () => {

    const { cart } = useContext(ProductContext);
    const [istoggle, setToggle] = useState(false);

    return (
        <div>
            {/* search */}
            <nav className=' container-fluid shadow  bg-light'>
                <div className="container py-3 font-poppins p-0 ">
                    <div className="row">
                        <div className="col-3">
                            <div className=" bg-blue-700 py-2 text-light text-center "><h4 className='m-0 fs-4'>ETEC CENTER</h4></div>
                        </div>
                        <div className="col-lg-6 col-9">
                            <div className=" d-flex justify-content-center align-items-center">
                                <input type="search" placeholder='Search for Product' className=' py-2 shadow-none border rounded-0 form-control' name="" id="" />
                                <a href="#">
                                    <button className='btn border rounded-0 p-2 '>
                                        <FaSearch className=' fs-6' />
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="d-none d-lg-block col-3">
                            <div className="">

                                {
                                    istoggle ? ( <div className="d-flex align-items-center justify-content-end py-0">
                                        <div
                                            style={{ height: 50, width: 50 }}
                                            className="rounded-circle  bg-danger overflow-hidden border"
                                            >
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFT9XCRVtbrdN-IIBOYrefMpURSstp_rLIg&s"
                                                alt=""
                                                className="w-100 h-100 object-fit-cover"
                                            />
                                        </div>
                                        <div className="dropdown">
                                            <button
                                                className="btn border-0 dropdown-toggle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                User Name
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                <a className="dropdown-item" href="#">
                                                    Action
                                                </a>
                                                </li>
                                                <li>
                                                <a className="dropdown-item" href="#">
                                                    Another action
                                                </a>
                                                </li>
                                                <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                                </li>
                                            </ul>
                                            </div>
                                        </div>

                                    ) : (<div className="d-flex justify-content-end">
                                            <button className="btn px-3 bg-blue-700 text-light rounded-0">
                                                Register
                                            </button>
                                            <button className="btn px-3 border rounded-0">
                                                Login
                                            </button>
                                        </div>
                                    )
                                }
                                

                                

                            </div>
                        </div>

                    </div>
                </div>
            </nav>
            {/* menu */}
            <nav className=' container-fluid bg-black p-0'>
                <div className="container ">
                    <div className="row">

                        <div className="col-12 col-md-3 py-2 py-lg-2 bg-blue-700">
                            <div className="dropdown">
                                <button className="btn text-light rounded-0 border-0 bg-transparent dropdown-toggle d-flex align-items-center justify-content-between w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <div className="d-flex align-items-center">
                                    <HiOutlineViewList className="fs-3 me-2"/>
                                    <p className="fs-5 m-0"> Categories</p>
                                </div>
                                </button>
                                <ul className="dropdown-menu w-100 mt-2 rounded-0 border border-2">
                                    <li> <NavLink to={'/'} className="dropdown-item">Home</NavLink></li>
                                    <li> <NavLink to={'/product'} className="dropdown-item">Product</NavLink></li>
                                    <li> <NavLink to={'/contact'} className="dropdown-item">Contact</NavLink></li>
                                </ul>
                            </div>
                        </div>

                        <div className=" d-none d-md-flex col-9 align-items-center justify-content-between">
                                <ul className="nav">
                                <li>
                                    <NavLink to={"/"} className="nav-link hover-blue text-light">
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/product"} className="nav-link hover-blue text-light">
                                        Shop
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/contact'} className="nav-link hover-blue text-light">
                                    Contact
                                    </NavLink>
                                </li>
                                </ul>
                                <div className="">
                                    <NavLink to={'/cart'} className="nav-link hover-blue text-light">
                                        <button type="button" className="btn text-light border position-relative me-3 rounded-0">
                                            <FaShoppingCart className="" />
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                {cart.length >= 0 ? cart.length : (0) }
                                            <span className="visually-hidden">unread messages</span>
                                            </span>
                                        </button>
                                        Shopping
                                    </NavLink>
                                </div>
                        </div>

                    </div>
                </div> 
            </nav>

        </div>
    )
}

export default Header