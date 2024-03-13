import React from "react"
import Navbar from "../../components/navbar/nav"
import './optical.css'
import { opticalglasses } from "../../utils/data"
import { FaHeart, FaShoppingCart } from 'react-icons/fa';



const Optical = ()=>{

   const favorites = JSON.parse(localStorage.getItem('favorites')) || []
   const cart = JSON.parse(localStorage.getItem('cart')) || []
  
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
 



    return(
        <>

        <Navbar/>

        < div className="parent">

         {
            opticalglasses.map((item)=>{
               return(
            < div className="child">
               <img src={item.image} alt="optical-glasses" />
               <p>Price: {item.price}KSH </p>
               <p onClick={() => handleFavorites(item)}> Add to Wishlist <FaHeart className="nav-icon" /> </p>
               <p onClick={() => handleCart(item)}> Add to Cart  <FaShoppingCart className="nav-icon" /> </p>
            </ div>
            )})
         }  

        </div>
        </>
    )
}

export default Optical