
import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import ProductContext from '../stores/ProductProvider';

const Product = () => {

    const { product, addToCart } = useContext(ProductContext);

    return (
        <div className="container-fluid bg-light">
            <div className=' container py-4 text-poppins '>
                <div className="row">
                    <div className="col-12 p-0">
                        <div className=" bg-white border">
                            <ul className=' nav list-unstyled p-2'>
                                <li className=' m-2'>
                                    <a href="" className=' fs-5 text-dark text-decoration-none'>Home  /</a>
                                </li>
                                <li className=' m-2'>
                                    <a href="" className=' fs-5 text-dark text-decoration-none'>Shop  /</a>
                                </li>
                                <li className=' m-2'>
                                    <a href="" className=' fs-5 text-dark text-decoration-none'>Shop List</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 my-3 p-0 text-poppins ">
                        <div className="row">
                            
                            <div className="col-md-4 col-lg-3">
                                {/* filter  */}
                                <div className=" ">
                                    <h3>Filter By Price</h3>
                                    <div className=" shadow border p-3 bg-white ">
                                        <ul className=' list-unstyled '>
                                            <li className=' d-flex justify-content-between align-items-center '>
                                                <p className=' m-0 p-2'>
                                                    <input type="checkbox" className=' me-2' name="" id="" /> All Prices
                                                </p>
                                                <button className=' btn border rounded-0 p-0 px-2'>1000</button>
                                            </li>
                                            <li className=' d-flex justify-content-between align-items-center '>
                                                <p className=' m-0 p-2'>
                                                    <input type="checkbox" className=' me-2' name="" id="" />$0 - $100
                                                </p>
                                                <button className=' btn border rounded-0 p-0 px-2'>150</button>
                                            </li>
                                            <li className=' d-flex justify-content-between align-items-center '>
                                                <p className=' m-0 p-2'>
                                                    <input type="checkbox" className=' me-2' name="" id="" />$150 - $200
                                                </p>
                                                <button className=' btn border rounded-0 p-0 px-2'>250</button>
                                            </li>
                                            <li className=' d-flex justify-content-between align-items-center '>
                                                <p className=' m-0 p-2'>
                                                    <input type="checkbox" className=' me-2' name="" id="" />$200 - $300
                                                </p>
                                                <button className=' btn border rounded-0 p-0 px-2'>350</button>
                                            </li>
                                            <li className=' d-flex justify-content-between align-items-center '>
                                                <p className=' m-0 p-2'>
                                                    <input type="checkbox" className=' me-2' name="" id="" />$300 - $400
                                                </p>
                                                <button className=' btn border rounded-0 p-0 px-2'>450</button>
                                            </li>
                                            <li className=' d-flex justify-content-between align-items-center '>
                                                <p className=' m-0 p-2'>
                                                    <input type="checkbox" className=' me-2' name="" id="" />$400 - $500
                                                </p>
                                                <button className=' btn border rounded-0 p-0 px-2'>550</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className=" my-5">
                                    <h3>Filter By Colors</h3>
                                    <div className=" shadow border p-3 bg-white ">
                                        <ul className=' list-unstyled '>
                                            <li className=' d-flex justify-content-between align-items-center '>
                                                <p className=' m-0 p-2'>
                                                    <input type="checkbox" className=' me-2' name="" id="" /> All Colors
                                                </p>
                                                <button className=' btn border rounded-0 p-0 px-2'>1000</button>
                                            </li>
                                            <li className=' d-flex justify-content-between align-items-center '>
                                                <p className=' m-0 p-2'>
                                                    <input type="checkbox" className=' me-2' name="" id="" />Black
                                                </p>
                                                <button className=' btn border rounded-0 p-0 px-2'>150</button>
                                            </li>
                                            <li className=' d-flex justify-content-between align-items-center '>
                                                <p className=' m-0 p-2'>
                                                    <input type="checkbox" className=' me-2' name="" id="" />White
                                                </p>
                                                <button className=' btn border rounded-0 p-0 px-2'>250</button>
                                            </li>
                                            <li className=' d-flex justify-content-between align-items-center '>
                                                <p className=' m-0 p-2'>
                                                    <input type="checkbox" className=' me-2' name="" id="" />Red
                                                </p>
                                                <button className=' btn border rounded-0 p-0 px-2'>350</button>
                                            </li>
                                            <li className=' d-flex justify-content-between align-items-center '>
                                                <p className=' m-0 p-2'>
                                                    <input type="checkbox" className=' me-2' name="" id="" />Yellow
                                                </p>
                                                <button className=' btn border rounded-0 p-0 px-2'>450</button>
                                            </li>
                                            <li className=' d-flex justify-content-between align-items-center '>
                                                <p className=' m-0 p-2'>
                                                    <input type="checkbox" className=' me-2' name="" id="" />Blue
                                                </p>
                                                <button className=' btn border rounded-0 p-0 px-2'>550</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className=" my-5">
                                    <h3>Filter By Size</h3>
                                    <div className=" shadow border p-3 bg-white ">
                                        <ul className=' list-unstyled '>
                                            <li className=' d-flex justify-content-between align-items-center '>
                                                <p className=' m-0 p-2'>
                                                    <input type="checkbox" className=' me-2' name="" id="" /> All Sizes
                                                </p>
                                                <button className=' btn border rounded-0 p-0 px-2'>1000</button>
                                            </li>
                                            <li className=' d-flex justify-content-between align-items-center '>
                                                <p className=' m-0 p-2'>
                                                    <input type="checkbox" className=' me-2' name="" id="" />XS
                                                </p>
                                                <button className=' btn border rounded-0 p-0 px-2'>150</button>
                                            </li>
                                            <li className=' d-flex justify-content-between align-items-center '>
                                                <p className=' m-0 p-2'>
                                                    <input type="checkbox" className=' me-2' name="" id="" />S
                                                </p>
                                                <button className=' btn border rounded-0 p-0 px-2'>250</button>
                                            </li>
                                            <li className=' d-flex justify-content-between align-items-center '>
                                                <p className=' m-0 p-2'>
                                                    <input type="checkbox" className=' me-2' name="" id="" />M
                                                </p>
                                                <button className=' btn border rounded-0 p-0 px-2'>350</button>
                                            </li>
                                            <li className=' d-flex justify-content-between align-items-center '>
                                                <p className=' m-0 p-2'>
                                                    <input type="checkbox" className=' me-2' name="" id="" />L
                                                </p>
                                                <button className=' btn border rounded-0 p-0 px-2'>450</button>
                                            </li>
                                            <li className=' d-flex justify-content-between align-items-center '>
                                                <p className=' m-0 p-2'>
                                                    <input type="checkbox" className=' me-2' name="" id="" />XL
                                                </p>
                                                <button className=' btn border rounded-0 p-0 px-2'>550</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-8 col-lg-9">
                                <div className="row">

                                {
                                    product.map( (e,i) =>{
                                        return(
                                            <div key={i} className=" col-md-6 my-3 col-lg-4 overflow-hidden ">
                                                <div style={{ height:370}} className="product w-100 border ">
                                                    <div style={{ height:'70%'}} className=" cateHover bg-black w-100 overflow-hidden position-relative ">
                                                        <div className=' w-100 position-absolute top-50 start-50 translate-middle z-2 text-center d-none bbtn'>
                                                            <a href="#">
                                                                <button onClick={()=>addToCart(e.id)} className=' abc btn border text-light m-md-1 m-2 rounded-0'>
                                                                    <FaShoppingCart />
                                                                </button>
                                                                <button className=' abc btn border text-light m-md-1 m-2 rounded-0'>
                                                                    <FaRegHeart />
                                                                </button>
                                                                <button className=' abc btn border text-light m-md-1 m-2 rounded-0'>
                                                                    <LuRefreshCw  />
                                                                </button>
                                                                <button className=' abc btn border text-light m-md-1 m-2 rounded-0'>
                                                                    < FaSearch />
                                                                </button>
                                                            </a>
                                                        </div>
                                                        <img src={e.image} alt="" className=' w-100 h-100 object-fit-cover' />
                                                    </div>
                                                    <div style={{ height:'30%'}} className=" w-100 text-center">
                                                        <h6 className='mt-2 fs-6 text-multiline  '>{e.name}</h6>
                                                        <p className=' m-0 '> ${e.price} </p>
                                                        <p className='text-danger m-0'>Rating {e.rating}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="col-12">
                        <div className=" d-flex justify-content-center align-items-center">
                            <ul className=' d-flex list-unstyled'>
                                <li>
                                    <a href="">
                                        <button className=' btn rounded-0 border bg-white'>Previous</button>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <button className=' btn rounded-0 border text-light bg-blue-700 '>1</button>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <button className=' btn rounded-0 border bg-white'>2</button>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <button className=' btn rounded-0 border bg-white'>3</button>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <button className=' btn rounded-0 border bg-white'>Next</button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product