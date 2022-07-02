import React, {useState, useEffect} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import { db, storage} from '../../firebase'
import { query, onSnapshot, setDoc, doc, collection, addDoc, Timestamp, serverTimestamp } from "firebase/firestore";

function Calendar({title}) {

    const [data, setData] = useState([])
    
    useEffect(() => {
        const q = query(collection(db,"events"))
        const unsub = onSnapshot(q, (snap) => {
            const array = snap.docs.map(doc =>{
                return{
                    title: doc.get('title'),
                    start: doc.get('start').toDate(),
                    allDay: doc.get('allDay')
                }
            })
            setData([...array])
        })
        return() => {unsub()}
    },[])

    const handleDateClick = (e:DateClickArg) =>{
        if (e.jsEvent.altKey){
                const title = prompt("Enter Title: ",e.dateStr)
                const event = {
                    title:title ? title : e.dateStr,
                    start: e.date,
                    allDay:true
                }
            addDoc(collection(db, "events"), event)
        }

    }

  return (
    <>
    <div className="new">
      <div className="newContainer">
    <div className="top">
          <h1>{title}</h1>
    </div>
    <FullCalendar plugins = {[dayGridPlugin, interactionPlugin]} 
    event = {data}
    dateClick = {handleDateClick}
    />
    </div>
    </div>
    </>
  )
}

export default Calendar