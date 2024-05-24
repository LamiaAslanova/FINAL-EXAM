import React, { useContext } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import MainContext from '../../../context/context'

const Header = () => {
  const { basketItems, wishItems } = useContext(MainContext)

  return (
    <>
      <header>
        <div className="header__left">
          <Link to='/'>
            <span className='first'>COLO</span>
            <span className='second'>SHOP</span>
          </Link>
        </div>
        <div className="header__middle">
          <div className="first__ul">
            <ul>
              <li><Link to='/'>HOME</Link></li>
              <li><Link to='#'>SHOP</Link></li>
              <li><Link to='#'>PROMOTION</Link></li>
              <li><Link to='#'>PAGES</Link></li>
              <li><Link to='#'>BLOG</Link></li>
              <li><Link to='#'>CONTACT</Link></li>
            </ul>
          </div>

          <div className="resp">
            <button class="btn btn-primary resp__button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
              <i class="fa-solid fa-bars"></i>
            </button>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul>
                  <li><Link to='/'>HOME</Link></li>
                  <li><Link to='#'>SHOP</Link></li>
                  <li><Link to='#'>PROMOTION</Link></li>
                  <li><Link to='#'>PAGES</Link></li>
                  <li><Link to='#'>BLOG</Link></li>
                  <li><Link to='#'>CONTACT</Link></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        <div className="header__right">
          <Link to='basket'>
            <button><i class="fa-solid fa-cart-shopping"></i></button><sup>{basketItems.length}</sup>
          </Link>
          <Link to='wishlist'>
            <button><i class="fa-solid fa-heart"></i></button><sup>{wishItems.length}</sup>
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header