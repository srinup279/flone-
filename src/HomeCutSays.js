import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'


function HomeCutSays() {
    return (
        <div className="cutomers-says py-5">
           <div className="container-fluid">
              <div className="row my-5">
                 <div className="col-10 mx-auto">
                    <div className="row justify-content-center gy-4">
                        <div className="cutomers-says-heading text-center">
                            <h1 className="mb-5 cut-heading-color">What Our Customers Says</h1>
                        </div>
                       <div className="col-lg-4 col-md-6 col-xs-12">
                          <div className="one text-center px-4 py-3 box-color">
                             <img src="../images/client1_customers_section.png" className="img-fluid" alt="pic"/>
                              <h4 className="text-color-our">Neville Blesh</h4>
                              <p className="para-color-our">Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.! Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy.</p>
                              <p>
                                  <FontAwesomeIcon icon={faStar} className="icon-color"/>
                                  <FontAwesomeIcon icon={faStar} className="icon-color"/>
                                  <FontAwesomeIcon icon={faStar} className="icon-color"/>
                                  <FontAwesomeIcon icon={faStar} className="icon-color"/>
                                  <FontAwesomeIcon icon={faStar} className="icon-color"/>
                              </p>
                          </div>
                       </div>
                       <div className="col-lg-4 col-md-6 col-xs-12">
                       <div className="one text-center text-white px-4 py-3 box-color-mid">
                             <img src="../images/client2_customers_section.png" className="img-fluid" alt="pic"/>
                              <h4 className="">Neville Blesh</h4>
                              <p>Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.! Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy.</p>
                              <p>
                                  <FontAwesomeIcon icon={faStar} className="icon-color"/>
                                  <FontAwesomeIcon icon={faStar} className="icon-color"/>
                                  <FontAwesomeIcon icon={faStar} className="icon-color"/>
                                  <FontAwesomeIcon icon={faStar} className="icon-color"/>
                                  <FontAwesomeIcon icon={faStar} className="icon-color"/>
                              </p>
                          </div>
                       </div>
                       <div className="col-lg-4 col-md-6 col-xs-12">
                       <div className="one text-center px-4 py-3 box-color">
                             <img src="../images/client3_customers_section.png" className="img-fluid" alt="pic"/>
                              <h4 className="text-color-our">Neville Blesh</h4>
                              <p className="para-color-our">Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.! Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy.</p>
                              <p>
                                  <FontAwesomeIcon icon={faStar} className="icon-color"/>
                                  <FontAwesomeIcon icon={faStar} className="icon-color"/>
                                  <FontAwesomeIcon icon={faStar} className="icon-color"/>
                                  <FontAwesomeIcon icon={faStar} className="icon-color"/>
                                  <FontAwesomeIcon icon={faStar} className="icon-color"/>
                              </p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
    )
}

export default HomeCutSays
