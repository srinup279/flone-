import React from 'react'
import HomeContact from '../HomeContact'
import HomeCutSays from '../HomeCutSays'
import HomeOurClients from '../HomeOurClients'
import HomeOurService from '../HomeOurService'
import HomeQualitySection from '../HomeQualitySection'
import HomeAboutUs from './HomeAboutUs'
import HomeFirstSection from './HomeFirstSection'


function Home() {
    return (
        <div>
           <HomeFirstSection/> 
           <HomeAboutUs/>
           <HomeQualitySection/>
           <HomeOurService/>
           <HomeCutSays/>
           <HomeContact/>
           <HomeOurClients/>
        </div>
    )
}

export default Home
