import React from "react";
import Chart from "../../components/charts/Chart"
import FeaturedInfo from "../../components/feauturedinfo/FeaturedInfo"
import "./home.css";
import Userhome from "../../components/userhome";
import Transactionhome from '../../components/transactionhome'
import { userData } from "../../dummydata.js";


function Home() {
  
    return (
      
    <div className="home">
      <div className = "widgets">
        <FeaturedInfo type = 'user'/>
        <FeaturedInfo type = 'event'/>
        <FeaturedInfo type = 'report'/> 
      </div>
      <Chart data={ userData } title="Payment Analytics" grid dataKey="Paid" dataKey2="Pending"/>
  
      <div className="homeWidgets">
      <Userhome/>
      <Transactionhome />

      </div>
    </div>

  )
}

export default Home