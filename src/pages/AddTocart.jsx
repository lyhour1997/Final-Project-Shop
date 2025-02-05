
import React, { useContext } from 'react'
import ProductContext from '../stores/ProductProvider'
import { MdDeleteForever } from "react-icons/md";

const AddTocart = () => {

    const { cart, removeFromCart } = useContext(ProductContext);
    // Function to calculate total price
    const calculateTotal = (price, quantity) => price * quantity;
    

    return (
       <div className="container-fluid bg-light">
            <div className="container mb-5 pb-5 p-0">
                <div className="row">
                
                    <div className="col-12 my-4">
                        <div className=" bg-white border p-3">
                            <a className=' fs-5 text-black text-decoration-none' href="">Home / Shop / Shopping Cart</a>
                        </div>
                    </div>
                    
                    <div className="col-12 ">
                        <div className="row ">
                            <div className="col-lg-8 my-2">
                                <div className="bg-light">
                                    <table className="table table-bordered text-center">
                                        <thead className="table-dark">
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th>Total</th>
                                            <th>Active</th>
                                        </tr>
                                        </thead >
                                        {
                                            cart.map( (e,i) =>{
                                                return(
                                                    <tbody className=' bg-light'>
                                                        <tr key={i}>
                                                            <td className=' text-start'>
                                                                <img style={{ width:50, height:50}} src={e.image} alt="" /> {e.name}
                                                            </td>
                                                            <td>{e.price}</td>
                                                            <td>{e.quantity}</td>
                                                            <td>{calculateTotal(e.price, e.quantity).toFixed(2)}</td>
                                                            <td>
                                                                <button className=' btn rounded-0 border-0 ' onClick={()=>removeFromCart(e.id)}>
                                                                    <MdDeleteForever className=' fs-4 text-color-700'/>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                )
                                            })
                                        }
                                    </table>    
                                </div> 
                            </div>

                            <div className="col-lg-4 my-2 ">
                                <div className=" py-5 p-3 border">
                                <h3 className="pb-2 text-center text-color-700">CART SUMMARY</h3>
                                    <table className="table ">
                                        {
                                            cart.map((e,i)=>{
                                                return(
                                                    <tbody key={i}>
                                                        <h5 className=' fs-3 mb-0 py-4 fw-bold text-center ms-5 ps-5'>Item : {i+1}</h5>
                                                        
                                                        <tr className=' fs-5'>
                                                            <td className=' pt-3'>Products: </td>
                                                            <td className=' text-end'>
                                                                <img src={e.image} style={{ height:50, width:50}} alt="" />
                                                            </td>
                                                        </tr>
                                                        <tr className=' fs-5'>
                                                            <td>Subtotal: </td>
                                                            <td className=' text-end'>{e.price}</td>
                                                        </tr>
                                                        <tr className=' fs-5'>
                                                            <td>QTY: </td>
                                                            <td className=' text-end'>{e.quantity}</td>
                                                        </tr>
                                                        <tr className="fw-bold fs-5 py-2">
                                                            <td>Total:  </td>
                                                            <td className=' text-end'>{calculateTotal(e.price, e.quantity).toFixed(2)}</td>
                                                        </tr>
                                                    </tbody>
                                                )
                                            })
                                        }
                                    </table>
                                    <button className=" fs-5 btn bg-blue-700 rounded-0 text-light my-3 w-100">Processed To Checkout</button>    
                                </div> 
                            </div>
                        </div>
                    </div>

                </div>
            </div>
       </div>
    )
}

export default AddTocart