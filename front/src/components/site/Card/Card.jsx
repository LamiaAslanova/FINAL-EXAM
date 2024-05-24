import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({ card }) => {
    const { addToBasket, addToWishlist } = useContext(MainContext)

    return (
        <>
            <div className="col-2 col-2__cards">
                <div class="card mt-5">
                    <div className="image__div">
                        <Link to={`details/${card._id}`}><img src={card.image} class="card-img-top" alt="..." /></Link>
                        <button onClick={() => { addToWishlist(card) }}><i class="fa-solid fa-heart"></i></button>
                    </div>
                    <div class="card-body">
                        <div className="h5__div">
                            <h5 class="card-title">{card.title}</h5>
                        </div>
                        <p class="card-text">${card.price}</p>
                        <button onClick={() => { addToBasket(card) }}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card