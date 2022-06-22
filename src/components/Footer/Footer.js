import React from "react";
import "./Footer.css";




function Footer(){
    return (
        <>
          <footer className="footer text-center" id="contact" data-aos="fade-up"
     data-aos-duration="1000">
             <div className="container">
                 <div className="row">
                     <div className="col-md-4">
                         <h5>Why Us?</h5>
                         <ul>
                             <li><i className="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;Verified Professionals</li>
                             <li><i className="fa fa-briefcase" aria-hidden="true"></i>&nbsp;&nbsp;Insured Work</li>
                             <li><i className="fa fa-phone" aria-hidden="true"></i>&nbsp;&nbsp;Professional Support</li>
                         </ul>
                     </div>
                     <div className="col-md-4">
                         <h5>Contact Us</h5>
                         <ul>
                             <li><i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;Bikaner, Rajashthan</li>
                             <li><i className="fa fa-mobile" aria-hidden="true"></i>&nbsp;&nbsp;+91-9783243399</li>
                             <li><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;ykumarkhandal@gmail.com</li>
                         </ul>
                     </div>
                     <div className="col-md-4 social">
                         <h5>Follow Us</h5>
                         <ul>
                             <li><a href="https://www.facebook.com/AtoZsabkuchcom-102074099168552"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                             <li><a href="https://twitter.com/YogeshS07054616?t=FciCHGo6VkOfczYyPbLUxA&s=08"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                             <li><a href="https://www.instagram.com/atozsabkuch/"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                             <li><a href="mailto: ykumarkhandal@gmail.com"><i className="fab fa-google" aria-hidden="true"></i></a></li>
                         </ul>
                     </div>
                 </div>
             </div>
          </footer>
        
          <div className="copyright py-4 text-center text-white">
              <div className="container"><small>Copyright &copy; atozsabkuch.com</small></div>
          </div>
        </>

    );
}
export default Footer;