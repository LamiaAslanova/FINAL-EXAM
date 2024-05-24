import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import BasketTable from '../../../components/site/BasketTable/BasketTable'
import './Basket.css'
import { Helmet } from 'react-helmet'

const Basket = () => {
    const { addToBasket, basketItems, setBasketItems } = useContext(MainContext)

    return (
        <div className='basket__div'>
            <Helmet>
                <title>Cart</title>
            </Helmet>
            <BasketTable basketInfos={basketItems} />
        </div>
    )
}

export default Basket