import React, {useEffect, useState} from 'react'
import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward,EventAvailable,Group, Report } from "@material-ui/icons"
import {query, collection, where, getDocs} from 'firebase/firestore'
import {db} from '../../firebase'
 function FeaturedInfo({type}) {
    
    const [amount, setAmount] = useState(null);
    const [diff, setDiff] = useState(null);
    let data;

    switch (type) {
        case "user":
          data = {
            title: "USERS",
            isMoney: false,
            link: "See all users",
            query:"users",
            icon: (
                <Group
                  className="icon"
                  style={{
                    color: "white",
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                    width:"80px",
                    height:"80px",
                    borderRadius:"50%",
                    marginTop: "25px",
                    marginRight: "40px"
                  }}
                />
            )
          };
          break;

        case "event":

          data = {
            title: "EVENTS",
            query:"events",
            link: "View all events",
            icon: (
                <EventAvailable
                  className="icon"
                  style={{
                    color: "white",
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                    width:"80px",
                    height:"80px",
                    marginTop: "25px",
                    marginRight: "40px"
                  }}
                />
            )
          };
          break;

        case "report":
          data = {
            title: "REPORTS",
            query:"reports",
            link: "View all Reports",
            isMoney: false,
            icon: (
                <Report
                  className="icon"
                  style={{
                    color: "white",
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                    width:"80px",
                    height:"80px",
                    borderRadius:"50%",
                    marginTop: "25px",
                    marginRight: "40px"
                  }}
                />
            )
          };
          break;
        default:
          break;
      }

    useEffect(() => {
        const fetchData = async () => {
          const today = new Date();
          const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
          const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));
    
          const lastMonthQuery = query(
            collection(db, data.query),
            where("timeStamp", "<=", today),
            where("timeStamp", ">", lastMonth)
          );
          const prevMonthQuery = query(
            collection(db, data.query),
            where("timeStamp", "<=", lastMonth),
            where("timeStamp", ">", prevMonth)
          );
    
          const lastMonthData = await getDocs(lastMonthQuery);
          const prevMonthData = await getDocs(prevMonthQuery);
    
          setAmount(lastMonthData.docs.length);
          setDiff(
            ((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length) *
              100
          );
        };
        fetchData();
      }, []);


      return (
        <div className="widget">
          <div className="widgetleft">
            <span className="widgettitle">{data.title}</span>
            <span className="counter">
              {data.isMoney && "$"} {amount}
            </span>
          </div>
          <div className="widgetright">
        {data.icon}
      </div>
        </div>
      );
}

export default FeaturedInfo