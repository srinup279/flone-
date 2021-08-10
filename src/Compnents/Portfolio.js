import React from 'react'
import PortfolioCard from '../PortfolioCard'
import Sdata from '../PortfolioData'

const Portfolio = () => {
  return (
    <>
      <div className="portfolio">
        <div className="container-fluid">
          <div className="row py-5">
             <div className="col-10 mx-auto">
               <div className="row my-5">
                 <div className="col-xs-12 text-center text-white">
                    <h1>Portfolio</h1>
                    <h6>Home . portfolio </h6>
                 </div>
               </div>
             </div>
          </div> 
        </div>
      </div>

      <div className="my-5">
        <h1 className="text-center port-text-color">Our Services</h1>        
      </div>
      <div className="container-fluid my-5">
         <div className="row">
            <div className="col-10 mx-auto">
               <div className="row gy-4">
                  {
                    Sdata.map((val, ind)=>{
                      return <PortfolioCard
                                key={ind}
                                imgsrc={val.imgsrc}
                                title = {val.title}
                             />
                    })
                  }
               </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default Portfolio
