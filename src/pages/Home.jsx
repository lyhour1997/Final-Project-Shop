
import React from 'react'
import SwiperSider from '../components/SwiperSider'
import { FaCheck } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { GoArrowSwitch } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import FeatureProduct from '../components/FeatureProduct';
import CateCard from '../components/CateCard';
import RecentProducts from '../components/RecentProducts';

const Home = () => {
    return (
        <div className=' pb-5 mb-5 '>
            {/* side */}
            <div className="container my-4 p-md-0 font-poppins">
            <div className="row">

                {/* sider */}
                <div style={{ height:450}} className="col-lg-8 ">
                    <div className=" w-100 h-100 bg-info">
                        <SwiperSider />
                    </div>
                </div>
                {/* ads */}
                <div style={{ height:450}} className="col-lg-4 py-4 py-lg-0  ">
                    <div className=" w-100 h-100 overflow-hidden">

                        <div className=" w-100 h-50 mb-2 bg-black position-relative imagehover overflow-hidden">
                            <div className=" w-75 text-center text-light position-absolute top-50 start-50 translate-middle z-1">
                                <h1 className=' fs-4'>Popular Gaming phnoe</h1>
                                <p className=' text-multiline'>When choosing a phone for gaming, you can consider things like its RAM,
                                    processor, and cooling system.
                                </p>
                                <a href=""><button className=' bg-blue-700  border text-light py-1 px-2'>Shop Now</button></a>
                            </div>
                            <img style={{ filter:'brightness(50%)'}} src="./img/s2.jpeg" alt="" className=' w-100 h-100 object-fit-cover' />
                        </div>

                        <div className=" w-100 h-50 mt-3 position-relative imagehover overflow-hidden bg-success ">
                            <div className=" w-75 text-center text-light position-absolute top-50 start-50 translate-middle z-1">
                                <h1 className=' fs-4'>Popular ipad</h1>
                                <p className=' text-multiline'>When choosing a phone for gaming, you can consider things like its RAM,
                                    processor, and cooling system.
                                </p>
                                <a href=""><button className=' bg-blue-700  border text-light py-1 px-2'>Shop Now</button></a>
                            </div>
                            <img style={{ filter:'brightness(50%)'}} src="./img/s3.webp" alt="" className=' w-100 h-100 object-fit-cover' />
                        </div>
                    </div>
                    
                </div>

            </div>
            </div> 

            {/* service */}
            <div className="container p-md-0 font-poppins">
                <div className="row ">
                    <div className=" col-md-6 col-lg-3 my-3 ">
                        <div className=" border bg-light py-4 d-flex justify-content-center align-items-center">
                            <FaCheck className=' fs-1 me-2 text-color-700' />
                            <h1 className=' m-0 fs-4'>Quality Product</h1>
                        </div>
                    </div>

                    <div className=" col-md-6 col-lg-3 my-3 ">
                        <div className=" border bg-light py-4 d-flex justify-content-center align-items-center">
                            <TbTruckDelivery className=' fs-1 me-2 text-color-700' />
                            <h1 className=' m-0 fs-4'>Free Delivery</h1>

                        </div>
                    </div>

                    <div className=" col-md-6 col-lg-3 my-3 ">
                        <div className=" border bg-light py-4 d-flex justify-content-center align-items-center">
                            <GoArrowSwitch className=' fs-1 me-2 text-color-700' />
                            <h1 className=' m-0 fs-4'>14-Day Return</h1>
                        </div>
                    </div>

                    <div className=" col-md-6 col-lg-3 my-3 ">
                        <div className=" border bg-light py-4 d-flex justify-content-center align-items-center">
                            <FiPhoneCall className=' fs-1 me-2 text-color-700' />
                            <h1 className=' m-0 fs-4'>24/7 Support</h1>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* categories */}
            <div className="container p-md-0 my-4 overflow-hidden ">
                <CateCard />
                
                {/* feature products */}
                <FeatureProduct/>
            </div>

            {/* Recent Products */}
            <div className="container p-md-0 font-poppins">
                <div className="row">

                    <div style={{ height:300}} className="col-md-6 my-3 my-md-0">
                        <div className=" bg-info h-100 position-relative imagehover overflow-hidden">
                            <div className=' position-absolute top-50 start-50 translate-middle z-2 w-100 text-center text-light '>
                                <p className='m-1'>SAVE 20%</p>
                                <h3 className=' pb-2'>Special Price</h3>
                                <a href="">
                                    <button className=' btn bg-blue-600 rounded-0 text-light'>Shop  Now</button>
                                </a>
                            </div>
                            <img style={{ filter:"brightness(50%)"}} src="./img/s2.jpeg" alt="" className='w-100 h-100 object-fit-cover' />
                        </div>
                    </div>

                    <div style={{ height:300}} className="col-md-6 my-3 my-md-0">
                        <div className=" bg-info h-100 position-relative imagehover overflow-hidden">
                            <div className=' position-absolute top-50 start-50 translate-middle z-2 w-100 text-center text-light '>
                                <p className='m-1'>SAVE 20%</p>
                                <h3 className=' pb-2'>Special Price</h3>
                                <a href="">
                                    <button className=' btn bg-blue-600 rounded-0 text-light'>Shop  Now</button>
                                </a>
                            </div>
                            <img style={{ filter:"brightness(50%)"}} src="./img/s3.webp" alt="" className='w-100 h-100 object-fit-cover' />
                        </div>
                    </div>
                    
                </div>

                <RecentProducts />

            </div>
        
        </div>
    )
}

export default Home