import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainContext from './context/context'
import ROUTES from './routes/routes'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(null)
  const [basketItems, setBasketItems] = useState(localStorage.getItem('basketItems')?JSON.parse(localStorage.getItem('basketItems')):[])
  const [wishItems, setWishItems] = useState(localStorage.getItem('wishItems')?JSON.parse(localStorage.getItem('wishItems')):[])

  useEffect(() => {
    axios.get('http://localhost:8080/shop')
    .then(res => {
      setData([...res.data])
    })
  }, [])

  useEffect(() => {
    localStorage.setItem('basketItems', JSON.stringify(basketItems))
  }, [basketItems])

  useEffect(() => {
    localStorage.setItem('wishItems', JSON.stringify(wishItems))
  }, [wishItems])

  const addToBasket = (item) => {
    const target = basketItems.find(x => x.item._id == item._id)
    if(!target){
      let newBasketItem = {
        item: item,
        count: 1,
        totalPrice: item.price
      }
      setBasketItems([...basketItems, newBasketItem])
    }
    else{
      target.count+=1
      target.totalPrice+=item.price
      setBasketItems([...basketItems])
    }
  }

  const increaseBasket = (item) => {
    const target = basketItems.find(x => x.item._id == item._id)
    target.count+=1
    target.totalPrice+=item.price
    setBasketItems([...basketItems])
  }

  const removeFromBasket = (item) => {
    const target = basketItems.find(x => x.item._id == item._id)
    if(target.count>1){
      target.count-=1
      target.totalPrice-=item.price
      setBasketItems([...basketItems])
    }
    else{
      setBasketItems([...basketItems.filter(x => x.item._id !== item._id)])
    }
  }

  const addToWishlist = (item) => {
    const target = wishItems.find(x => x.item._id == item._id)
    if(!target){
      let newWishItem = {
        item: item
      }
      setWishItems([...wishItems, newWishItem])
    }
  }

  const removeFromWishlist = (item) => {
    setWishItems([...wishItems.filter(x => x.item._id !== item._id)])
  }

  const routes = createBrowserRouter(ROUTES)

  const contextData = {
    data, setData, basketItems, setBasketItems, addToBasket, increaseBasket, removeFromBasket, search, setSearch, sort, setSort, wishItems, setWishItems, addToWishlist, removeFromWishlist
  }

  return (
    <>
      <MainContext.Provider value={contextData}>
        <RouterProvider router={routes} />
      </MainContext.Provider>
    </>
  )
}

export default App
