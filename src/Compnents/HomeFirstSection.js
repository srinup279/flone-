import React from 'react'

function HomeFirstSection() {
    return (
        <div className="first-section py-md-5 py-0">
           <div className="container-fluid">
              <div className="row">
                 <div className="col-10 mx-auto">
                     <div className="row my-5">
                        <div className="col-lg-6  col-xs-12 mt-5 text-lg-start text-center">
                           <h1 className="first-section-heading-clr">WE CREATE STUFF FOR<br/>WEB &amp; MOBILE</h1>
                           <p className="my-4 first-section-para-clr">DESIGNING DEVELOPMENT BRANDING QA &amp; TESTING</p>
                           <button className="px-4 py-2 rounded border-0 mx-4 my-3 first-section-btn-clr1">Get Started</button>
                           <button className="px-4 py-2 rounded border-0 mx-4 first-section-btn-clr2">Find Services</button>
                        </div>

                        <div className="col-lg-6 col-xs-12 my-3">
                            <img className="img-fluid w-100" src="../images/modern-landing-page.jpg" alt="side-pic"/>
                        </div>
                     </div> 
                 </div>
              </div>
           </div>
           
        </div>
    )
}

export default HomeFirstSection
