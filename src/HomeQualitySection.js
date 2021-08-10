import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'
function HomeQualitySection() {
    return (
        <div  className="quality-team py-5">
            <div className="container-fluid">
                <div className="row my-5">
                   <div className="col-10 mx-auto">
                      <div className="row">
                         <div className="col-lg-6 col-xs-12 text-center">
                            <img src="../images/quality_pic.png" className="img-fluid " alt="pic"/>
                         </div>

                         <div className="col-lg-6 col-xs-12 mt-5">
                            <h1 className="quality-heading-color">We're A Quality Team</h1>
                            <p className="quality-para-color">Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.</p>
                            <div className="row">
                               <div className="col-lg-5 col-xs-12 py-xl-5 py-0">
                                  <p><FontAwesomeIcon icon={faAngleDoubleRight}/> <strong>Website Designing</strong></p>
                                  <p><FontAwesomeIcon icon={faAngleDoubleRight}/> <strong>Mobile Apps</strong></p>
                               </div>
                               <div className="col-lg-5 col-xs-12 py-xl-5 py-0">
                                  <p><FontAwesomeIcon icon={faAngleDoubleRight}/> <strong>Website Development</strong></p>
                                  <p><FontAwesomeIcon icon={faAngleDoubleRight}/> <strong>Digital Marketing</strong></p>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default HomeQualitySection
