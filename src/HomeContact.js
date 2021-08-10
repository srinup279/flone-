import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt} from '@fortawesome/free-solid-svg-icons'

function HomeContact() {
    return (
        <div className="contact-section py-5">
           <div className="container-fluid">
               <div className="row my-5">
                  <div className="col-10 mx-auto">
                     <div className="row justify-content-center gy-4">
                         <div className="contact-heading text-center">
                            <h1 className="contact-heading-color">You Contact</h1>
                         </div>
                        <div className="col-md-5 col-xs-10 text-white py-4 text-center rounded back-color-contact">
                           <div className="">
                               <ul className="list-inline d-flex mx-lg-5 mx-md-4 mx-sm-2 mx-5">
                                   <li className="pt-2 me-3 ms-lg-5 ms-md-0 ms-sm-5 ms-xs-0"><FontAwesomeIcon icon={faPhoneAlt} className="fs-1"/></li>
                                   <li><h4>0731.499.9969<br/>+1.949.544.1199</h4></li>
                               </ul>
                           </div>
                        </div>
                        <div className="col-md-5 col-xs-10 rounded text-white mx-4 back-color-contact">
                          <div className="py-4 px-4 ">
                            <h4>Subcribe Now</h4>
                            <form className="d-flex">
                                <input className="form-control" type="search" placeholder="Enter Your Email*" aria-label="Search" required/>
                                <button className="btn btn-color-contact" type="submit">Search</button>
                            </form>
                            </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div> 
        </div>
    )
}

export default HomeContact
