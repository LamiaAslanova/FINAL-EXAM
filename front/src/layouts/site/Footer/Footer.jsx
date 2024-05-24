import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row footer__row">
                <div className="col-6 footer__col">
                  <div className="footer__top__left">
                    <ul>
                      <li><Link to='#'>Blog</Link></li>
                      <li><Link to='#'>FAQs</Link></li>
                      <li><Link to='#'>Contact us</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 footer__col">
                  <div className="footer__top__right">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-skype"></i>
                    <i class="fa-brands fa-pinterest"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>©2018 All Rights Reserverd. This template is made with <i class="fa-regular fa-heart"></i> by <span>Colorlib</span></p>
        </div>
      </footer>
    </>
  )
}

export default Footer