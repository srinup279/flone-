import React from 'react'

function HomeOurService() {
    return (
        <div className="our-service py-5">
            <div className="container-fluid">
               <div className="row my-5">
                  <div className="col-10 mx-auto">
                     <div className="row justify-content-center text-white gy-4">
                         <div className="our-service-heading text-center">
                            <h1 className="mb-5">Our Service</h1>
                         </div>
                        <div className="col-lg-2 col-md-4 col-xs-10 text-center mx-4 py-4 border-color-our-service">
                           <h5>Website<br/>Desiging</h5>
                        </div>
                        <div className="col-lg-2 col-md-4 col-xs-10 text-center mx-4 py-4 border-color-our-service">
                           <h5>Website<br/>Development</h5>
                        </div>
                        <div className="col-lg-2 col-md-4 col-xs-10 text-center mx-4 py-4 border-color-our-service">
                           <h5>Mobile<br/>Aplication</h5>
                        </div>
                        <div className="col-lg-2 col-md-4 col-xs-10 text-center mx-4 py-4 border-color-our-service">
                           <h5>Digital<br/>Marketing</h5>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </div>
    )
}

export default HomeOurService
