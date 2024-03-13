import React from "react"
import Navbar from "../../components/navbar/nav"

import { FaHeart, FaShoppingCart } from 'react-icons/fa';

import { sunglasses } from "../../utils/data"
import './sunglasses.css'
const Sunglasses = () => {
   const favorites = JSON.parse(localStorage.getItem('favorites')) || []
 
  
  
   const handleFavorites = (item) =>{
 
    
 
     function checkIfItemExists (checkedItem){
       let exists = false
       favorites.forEach((favorite)=>{
         if (checkedItem === favorite) {
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
       favorites.push(item)
       localStorage.setItem('favorites', JSON.stringify(favorites))
     }
     
   }
   const cart = JSON.parse(localStorage.getItem('cart')) || []
   const handleCart = (item) =>{
 
      function checkIfcartItemExists (checkedcartItem){
        let exists = false
        cart.forEach((carts)=>{
          if (checkedcartItem === carts) {
            exists = true
          }
        })
        return exists
      }
  
      const result = checkIfcartItemExists(item)
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
         <Navbar />

         < div className="parent">


            {
               sunglasses.map((item) => {
                  return (
                     < div className="child">
                        <img src={item.image} alt="sunglasses" />
                        <p> Price: {item.price}KSH </p>
                        <p onClick={() => handleFavorites(item)}> Add to Wishlist <FaHeart className="nav-icon" /> </p>
                        <p onClick={() => handleCart(item)}> Add to Cart  <FaShoppingCart className="nav-icon" /> </p>
                     </ div>
                  )
               })
            }


         </ div >
      </>
   )
}

export default Sunglasses