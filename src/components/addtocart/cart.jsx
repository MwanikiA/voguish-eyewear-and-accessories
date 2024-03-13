import { useEffect, useState } from "react"
import './addtocart.css'
import '../../utils/data.js'
import Navbar from "../navbar/nav.jsx"
import { Link } from "react-router-dom"



const Addtocart = ()=>{
    const [ cartItems, setcart] = useState([])

    const fetchcart = ()=>{
        const data = JSON.parse(localStorage.getItem('cart'))
        setcart(data)
    }

    useEffect(()=>{
        fetchcart()
    }, [])
    const removeFromCart = (itemtoremove) => {
        const updatedCart = cartItems.filter(item => item !== itemtoremove);
        setcart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const clearCart = () => {
        setcart([]);
        localStorage.removeItem('cart');
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    
   

    return (
        <>
        <Navbar/>
        <div>
        <div className="cart">
        
            {
             cartItems.map((item)=>{


                    return (
                        <div className="cards">
                            
                               <img src={item.image}/>
                               <p>Price: {item.price}KSH </p>
                               <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
                              
                        </div>
                
                    )
                })
            }
        </div>
        <div className="total">
                <p>Total Price: {calculateTotalPrice()} KSH</p>
                    < Link to= "/checkout">
                     <button onClick={() => clearCart()}> Checkout</button>
                    </Link >
                
            </div>
        </div>
        </>
    )
}

export default Addtocart