import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faTwitter,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="footer-top-div py-5">
           <div className="container-fluid">
               <div className="row my-5">
                  <div className="col-10 mx-auto">
                      <div className="row">
                         <div className="col-lg-3 col-sm-6 col-xs-12">
                            <img src="../images/logo-footer.png" alt="footer-log" className="w-100 img-fluid"/>
                            <p className="text-white mt-3">OsiyaTech is a world class global IT<br/>Organization offering a band-width<br/>of end-to-end services and solutions<br/>in current and emerging<br/>technologies.</p>
                            <div>
                                <ul className="list-inline d-flex">
                                    <li className="me-3 px-2 rounded icon-bg-color"><Link  to="/"><FontAwesomeIcon icon={faFacebookF}  className="text-white"/></Link></li>
                                    <li className="me-3 px-2 rounded icon-bg-color"><Link to="/"><FontAwesomeIcon icon={faTwitter} className="text-white"/></Link></li>
                                    <li className="me-3 px-2 rounded icon-bg-color"><Link to="/"><FontAwesomeIcon icon={faLinkedinIn}  className="text-white"/></Link></li>
                                </ul>
                            </div>
                         </div>

                         <div className="col-lg-3 col-sm-6 col-xs-12 ">
                             <h2 className="text-white underline">Contact Us</h2>
                             <div className="mt-5">
                                <ul className="list-inline d-flex text-white">
                                    <li className="me-2"><FontAwesomeIcon icon={faPhoneAlt} /></li>
                                    <li><strong>Phone : </strong><br/>0731.499.9969 +1.949.544.1199</li>
                                </ul>
                             </div>
                             <div>
                                 <ul className="list-inline d-flex text-white">
                                     <li className="me-2"><FontAwesomeIcon icon={faEnvelope}/></li>
                                     <li><strong>Email : </strong><br/>adarsh@osiyatech.com</li>
                                 </ul>
                             </div>
                             <div>
                                 <ul className="list-inline d-flex text-white">
                                    <li className="me-2"><FontAwesomeIcon icon={faMapMarkerAlt} /></li>
                                    <li><strong>Address : </strong><br/>21, Chain Singh ka Bagicha, New<br/>Palasia, Near Corporation Bank,<br/>Indore (M.P.)</li>
                                 </ul>
                             </div>
                         </div>

                         <div className="col-lg-3 col-sm-6 col-xs-12 ">
                            <h2 className="text-white">Service Links</h2>
                            <p className="mt-5"><Link to="/" className="text-decoration-none text-white">Website Designing</Link></p>
                            <p><Link to="/" className="text-decoration-none text-white">Website Development</Link></p>
                            <p><Link to="/" className="text-decoration-none text-white">Mobile Apps</Link></p>
                            <p><Link to="/" className="text-decoration-none text-white">Digital Marketing</Link></p>
                         </div>

                         <div className="col-lg-3 col-sm-6 col-xs-12 ">
                            <h2 className="text-white">Newsletter</h2>
                            <h2 className="text-white">Newsletter</h2>
                            <form className="mt-5 text-center">
                                <input type="text" className="w-100 py-3 rounded" placeholder="Enter Your Email.." required/><br/>
                                <p className="footer-btn-color py-3 my-3 rounded"><Link to="/" className="text-decoration-none text-white"><strong>Subscribe</strong></Link></p>
                            </form>
                         </div>

                      </div>
                  </div>
               </div>
           </div> 
        </div>
    )
}

export default Footer
