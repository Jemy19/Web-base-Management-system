import React, {useEffect, useState} from 'react'
import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import {query, collection, where, getDoc} from 'firebase/firestore'
import {db} from '../../firebase'
 function FeaturedInfo() {

    useEffect(() =>{
        const fetchdata = async () => {
            const today = new Date()
            const lastMonth = new Date(new Date().setMonth(today.getMonth()-1))
            const prevMonth = new Date(new Date().setMonth(today.getMonth()-2))

            const lastMonthQuery = query(collection(db,"users"), where("timeStamp","<=",today ),where("timeStamp",">", lastMonth))
            const prevMonthQuery = query(collection(db,"users"), where("timeStamp","<=",today ),where("timeStamp",">", prevMonth))
            const lastMonthData = query(collection(db,"users"), where("timeStamp","<=",today ),where("timeStamp",">", prevMonth))
        } 
        fetchdata()

    },[])



  return (
    <div className="featured">
      <div className="featuredItem">
          <span className="featuredTitle" title = "users">Users</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">7</span>
          </div>
      </div>
      <div className="featuredItem">
          <span className="featuredTitle">Events</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">5</span>
              <span className="featuredMoneyRate">
              </span>
          </div>
      </div>
      <div className="featuredItem">
          <span className="featuredTitle">Reports</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">0</span>
              <span className="featuredMoneyRate">
              </span>
          </div>
      </div>
    </div>
  );
}

export default FeaturedInfo