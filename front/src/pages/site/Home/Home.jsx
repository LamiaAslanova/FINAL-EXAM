import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import Cards from '../../../components/site/Cards/Cards'
import './Home.css'
import Helmet from 'react-helmet'

const Home = () => {
  const { data, setData, search, setSearch, sort, setSort } = useContext(MainContext)

  return (
    <>
      <div className="first__section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>SPRING / SUMMER COLLECTION 2017</p>
              <h1>Get up to 30% Off <br /> New Arrivals</h1>
              <button>SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
      <div className='home__div'>
        <Helmet>
          <title>Home Page</title>
        </Helmet>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="search__div">
                <input type="text" placeholder='Search' value={search} onChange={(e) => { setSearch(e.target.value) }} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="sort__buttons">
                <button onClick={() => { setSort({ field: 'price', asc: true }) }}>Low to High</button>
                <button onClick={() => { setSort({ field: 'price', asc: false }) }}>High to Low</button>
                <button onClick={() => { setSort(null) }}>Default</button>
              </div>
            </div>
          </div>
        </div>
        <Cards cards={data.filter(x => x.title.toLowerCase().includes(search.toLowerCase())).sort((a, b) => {
          if (!sort) {
            return 0
          }
          else if (sort.asc == true) {
            return (a[sort.field] > b[sort.field]) ? 1 : ((b[sort.field] > a[sort.field]) ? -1 : 0)
          }
          else if (sort.asc == false) {
            return (a[sort.field] < b[sort.field]) ? 1 : ((b[sort.field] < a[sort.field]) ? -1 : 0)
          }
        })} />
      </div>
    </>
  )
}

export default Home