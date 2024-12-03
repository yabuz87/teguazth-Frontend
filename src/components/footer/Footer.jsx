import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className="footer-container">
    <hr></hr>
    <div className="contact">
        <h2 className="text-center">Contact us</h2>
        <p className="text-center">you can contact us to learn more and give any feedback by the following social media links and email</p>
        <div className="social-medias">
            <p><i className="bi bi-instagram"></i>
            </p>
            <p><i className="bi bi-facebook"></i></p>
            <p><i className="bi bi-tiktok"></i></p>
            <p><i className="bi bi-linkedin"></i></p>
            <p><i className="bi bi-x fs-4"></i></p>
            <p><i className="bi bi-envelope"></i></p>
        </div>
    </div>
      <hr/>
      <div className="footer">
        <p>Copyright 2024</p>
        <p>Terms and privacy</p>
        <p>all rights reserved to torpa computer science team 2015EC</p>
        <p>Developed by <a href="https://github.com/yabuz87/teguazth-Frontend">Torpa plc</a></p>
        
      </div>
    </div>
  )
}

export default Footer
