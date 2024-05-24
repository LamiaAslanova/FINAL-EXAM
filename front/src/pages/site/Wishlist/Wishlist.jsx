import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import WishCards from '../../../components/site/WishCards/WishCards'
import './Wishlist.css'

const Wishlist = () => {
    const {wishItems, setWishItems, addToWishlist} = useContext(MainContext)

  return (
    <div className='wish__div'>
        <WishCards wishCards={wishItems}/>
    </div>
  )
}

export default Wishlist