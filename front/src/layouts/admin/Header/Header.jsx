import React from 'react'
import { Link } from 'react-router-dom'
import '../../site/Header/Header.css'

const Header = () => {
  return (
    <>
      <header>
        <div className="header__left">
          <span className='first'>COLO</span>
          <span className='second'>SHOP</span>
        </div>
        <div className="header__middle">
          <ul>
            <li><Link to='/admin'>PRODUCTS</Link></li>
            <li><Link to='add'>ADD</Link></li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header