
import React, { useContext } from 'react'
import ProductContext from '../stores/ProductProvider'
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const RecentProducts = () => {

    const { product, addToCart } = useContext(ProductContext);

    return (
        <div className="row my-4 font-poppins">

            <div className=" d-flex justify-content-between align-items-center">
                <h1 className=' fs-2'>Recent Products</h1>
                <p className=' m-0 d-none d-lg-block'>-----------------------------------------------------------
                -----------------------------------</p>
                <p className='m-0 d-md-none'>------------------</p>
                <p className=' m-0 d-none d-md-block d-lg-none '>--------------------------------------------------</p>
            </div>

            {
                product.map( (e,i) =>{
                    return(
                        <div key={i} className=" col-md-4 my-3 col-lg-3 overflow-hidden ">
                            <div style={{ height:400}} className="product w-100 border bg-light  ">
                                <div style={{ height:'70%'}} className=" cateHover bg-black w-100 overflow-hidden position-relative ">
                                    <div className='  w-100 position-absolute top-50 start-50 translate-middle z-2 text-center d-none bbtn'>
                                        <NavLink to={'/cart'}>
                                            <button onClick={()=>addToCart(e.id)} className=' abc btn border text-light m-2 rounded-0'>
                                                <FaShoppingCart />
                                            </button>
                                        </NavLink>
                                        <button className=' abc btn border text-light m-2 rounded-0'>
                                            <FaRegHeart />
                                        </button>
                                        <button className=' abc btn border text-light m-2 rounded-0'>
                                            <LuRefreshCw  />
                                        </button>
                                        <button className=' abc btn border text-light m-2 rounded-0'>
                                            < FaSearch />
                                        </button>
                                    </div>
                                    <img src={e.image} alt="" className=' w-100 h-100 object-fit-cover' />
                                </div>
                                <div style={{ height:'30%'}} className=" w-100 text-center ">
                                    <h6 className='mt-2 fs-6 text-multiline  '>{e.name}</h6>
                                    <p className=' m-0 '> {e.price} </p>
                                    <p className='text-danger m-0'>{e.rating}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default RecentProducts