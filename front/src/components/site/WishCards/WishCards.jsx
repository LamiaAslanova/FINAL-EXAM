import React from 'react'
import WishCard from '../WishCard/WishCard'

const WishCards = ({wishCards}) => {
  return (
    <>
        <div className="container">
            <div className="row">
                {
                    wishCards.map((wishCard, index) => {
                        return(
                            <WishCard key={index} wishCard={wishCard}/>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default WishCards