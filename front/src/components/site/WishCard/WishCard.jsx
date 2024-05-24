import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MainContext from '../../../context/context'

const WishCard = ({ wishCard }) => {
    const { addToBasket, removeFromWishlist } = useContext(MainContext)

    return (
        <>
            <div className="col-2 col-2__cards">
                <div class="card">
                    <div className="image__div">
                        <img src={wishCard.item.image} class="card-img-top" alt="..." />
                        <button onClick={() => {removeFromWishlist(wishCard.item)}}><i class="fa-regular fa-heart"></i></button>
                    </div>
                    <div class="card-body">
                        <div className="h5__div">
                            <h5 class="card-title">{wishCard.item.title}</h5>
                        </div>
                        <p class="card-text">${wishCard.item.price}</p>
                        <button onClick={() => { addToBasket(wishCard.item) }}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WishCard