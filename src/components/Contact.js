import React from 'react'
import {FaFacebookF,FaTwitter,FaInstagram,FaPinterest,FaPlay} from 'react-icons/fa' 

const Contact = () => {
    return (
        <div className='contact' >
            <div className="container">
                  <div className="contactSection">
                      
                          <div className="row justifyCenter">
                              
                              <div className="col-6">
                                  <div className="contactSection-logo">
                          <img src="/images/logo.png" alt="logo"/>
                      </div>
                      <p>

                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum non voluptas voluptate fugit deserunt provident ullam aspernatur incidunt, sit praesentium vel aperiam beatae nesciunt eius officiis ducimus totam neque quia.
                      </p>
                              <ul className="aboutCircles">
                                  
                                      <li><FaFacebookF/></li>
                                      <li><FaTwitter/></li>
                                      <li><FaPinterest/></li>
                                      <li><FaInstagram/></li>
                              </ul>
                              </div>
                              </div>

                  </div>
            </div>
            
        </div>
    )
}

export default Contact
