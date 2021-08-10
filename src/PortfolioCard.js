import React from 'react'
import { Link } from 'react-router-dom'


const PortfolioCard = (props) => {
  return (
    <>
        <div className="col-lg-4 col-sm-6 col-xs-12 mx-auto">
          <div className="card">
            <img src={props.imgsrc} className="card-img-top" alt="pics"/>
               <div className="card-body">
                  <h5 className="card-title port-card-text-color">{props.title}</h5>
                  <p className="card-text port-card-text-color">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to ="/" className="btn btn-primary">Know More</Link>
                </div>
          </div>
        </div>
                    
               
    </>  
  )
}

export default PortfolioCard
