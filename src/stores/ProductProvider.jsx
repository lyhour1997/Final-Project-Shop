
import axios from "axios"; // install and import
import React, { createContext, useEffect, useState } from "react";

// step1 
const ProductContext = createContext();
// step3
export const ProductProvider = ({children}) => {
    // step4
    const [product, setProduct] = useState([]);

    const [cart, setCart] = useState(() => {
        // Initialize cart from localStorage
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
      });

    // step5
    const fetchApi = async  () =>{
        try{
            const res = await axios.get("https://product-server-json.onrender.com/products/");
            setProduct(res.data);
            console.table(res.data);

        }catch(e){
            console.log("check error:",e);
        }
    }
    // step6
    useEffect( () =>{
        fetchApi();
    }, []); // run only one

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Add product to cart
    const addToCart = (productId) => {
        const productToAdd = product.find((item) => item.id === productId);
        if (productToAdd) {
            setCart((prevCart) => {
                const isProductInCart = prevCart.some((item) => item.id === productId);
                if (isProductInCart) {
                // Update quantity if product is already in cart
                    return prevCart.map((item) =>
                        item.id === productId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                    );
                }
                // Add new product to cart
                return [...prevCart, { ...productToAdd, quantity: 1 }];
            });
        }
        
        alert("Add to Shopping");
    };

    // Remove product from cart
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
        alert("Remove Cart Already!")
    };

    return (
        // for provide to children
        <ProductContext.Provider value={{ product, cart, addToCart, removeFromCart }}>
            {children}
        </ProductContext.Provider>
    )
}


// step2
export default ProductContext; // it can call to use each file

