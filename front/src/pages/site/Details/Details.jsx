import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './Details.css'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'

const Details = () => {
  const {addToBasket} = useContext(MainContext)
  const [item, setItem] = useState({})
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8080/shop/${id}`)
      .then(res => {
        setItem(res.data)
      })
  }, [])

  return (
    <div className='detail__div'>
      <Helmet>
        <title>{`${item.title}`}</title>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-6 detail__left">
            <img src={item.image} alt="" />
          </div>
          <div className="col-6 detail__right">
            <h1>{item.title}</h1>
            <p>${item.price}</p>
            <button onClick={() => { addToBasket(item) }}>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details