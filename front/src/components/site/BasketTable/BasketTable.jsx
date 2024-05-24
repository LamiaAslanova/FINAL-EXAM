import React from 'react'
import BasketTableItem from '../BasketTableItem/BasketTableItem'

const BasketTable = ({basketInfos}) => {
  return (
    <>
        <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Remove</th>
                        <th scope="col">Count</th>
                        <th scope="col">Add</th>
                        <th scope="col">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        basketInfos.map((basketInfo, index) => {
                            return(
                                <BasketTableItem key={index} basketInfo={basketInfo}/>
                            )
                        })
                    }
                </tbody>
            </table>
    </>
  )
}

export default BasketTable