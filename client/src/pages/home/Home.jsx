import React from 'react';
import Chart from "../../components/dashboard/chart/Chart"
import FeaturedInfo from "../../components/dashboard/featuredInfo/FeaturedInfo"
import "./home.css";
import { userData } from "../../dummyData.js";
import WidgetSm from "../../components/dashboard/widgetSm/WidgetSm";
import WidgetLg from "../../components/dashboard/widgetLg/WidgetLg";

import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import Navbar from '../../components/Navbar/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
        <div className="container">
          <Sidebar />
          <div className="home">
            <FeaturedInfo />
            <Chart data={ userData } title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
              <WidgetSm />
              <WidgetLg />
            </div>
          </div>
      </div>
    </div>
  )
}
