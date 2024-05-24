import React, { useContext } from 'react'
import MainContext from '../../../context/context'

const BasketTableItem = ({basketInfo}) => {
    const {increaseBasket, removeFromBasket} = useContext(MainContext)

  return (
    <>
            <tr>
                <td><img width='120px' src={basketInfo.item.image} alt="" /></td>
                <td>{basketInfo.item.title}</td>
                <td>${basketInfo.item.price}</td>
                <td><button className='btn btn-danger' onClick={() => {removeFromBasket(basketInfo.item)}}>Remove</button></td>
                <td>{basketInfo.count}</td>
                <td><button className='btn btn-primary' onClick={()=>{increaseBasket(basketInfo.item)}}>Add</button></td>
                <td>${basketInfo.totalPrice}</td>
            </tr>
        </>
  )
}

export default BasketTableItem