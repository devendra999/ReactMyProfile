import React from 'react'
import SocialIcons from '../socialIcons/SocialIcons'
import './footer.scss'

const Footer = () => {
  return (
    <>
        <footer>
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-4">
                <div className="footer-logo w-auto">
                  <a href="#">
                    <img src="images/logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <SocialIcons/>
              </div>
              <div className="col-md-4">
                <div className="copyright-text w-auto">
                  <span>Copyright © 2021 Rainbow-Themes. All Rights Reserved.</span>
                </div>
              </div>
              
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer