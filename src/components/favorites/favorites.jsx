import { useEffect, useState } from "react"
import React from "react"

import './favorites.css'
import '../../utils/data.js'
import Navbar from "../navbar/nav"
import { FaShoppingCart } from 'react-icons/fa';

const FavSection = ()=>{
    const [ favItems, setFav] = useState([])

    const fetchFavorites = ()=>{
        const data = JSON.parse(localStorage.getItem('favorites'))
        setFav(data)
    }

    useEffect(()=>{
        fetchFavorites()
    }, [])
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const handleCart = (item) =>{
 
    
 
        function checkIfItemExists (checkedItem){
          let exists = false
          cart.forEach((carts)=>{
            if (checkedItem === carts) {
              exists = true
            }
          })
          return exists
        }
    
        const result = checkIfItemExists(item)
        if (result) {
          alert('Item already exists')
          console.log('Item exists')
        } else {
          console.log(result)
          cart.push(item)
          localStorage.setItem('cart', JSON.stringify(cart))
        }
        
      }

    return (
        <>
        <Navbar/>
        <div className="favs">
        
            {favItems.map((item)=>{
                    return (
                        <div className="card">
                            
                               <img src={item.image}/>
                               <p>Price: {item.price}KSH </p>
                               <p onClick={() => handleCart(item)} className="cart"> Add to Cart  <FaShoppingCart className="nav-icon" /> </p>
                             
                              
                        </div>
                
                    )
                })
            }
        </div>
        </>
    )
}

export default FavSection