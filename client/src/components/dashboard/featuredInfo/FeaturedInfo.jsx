import React from 'react';
import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
          <span className="featuredTitle">Revenue</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">PHP 50,324</span>
              <span className="featuredMoneyRate">-32.4 
              <ArrowDownward className="featuredIcon negative"/>
              </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
          <span className="featuredTitle">Sales</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">PHP 20,100</span>
              <span className="featuredMoneyRate">-15.4 
              <ArrowDownward className="featuredIcon negative"/>
              </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
          <span className="featuredTitle">Cost</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">PHP 15,700</span>
              <span className="featuredMoneyRate">+3.2
              <ArrowUpward className="featuredIcon positive"/>
              </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
