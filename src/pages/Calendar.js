import React from 'react'
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as bootstrap from "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"



const Calender = () => {

    const events = [
        {
          title: "The Title",
          start: "2023-04-09T08:00:00",
          end: "2023-04-09T09:00:00",
        },
        {
         title: "Donation1",
          start: "2023-04-11T05:00:00",
          end: "2023-04-11T06:00:00",
        }
      ];

  return (
    <div>
         <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}

        initialView={"dayGridMonth"}
        themeSystem={'bootstrap5'}
        headerToolbar={{
          start: "today prev,next", 
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", 
        }}
        height={"90vh"}
        events={events}
        eventDidMount={(info)=>{
            return new bootstrap.Popover(info.el, {
                title: info.event.title,
                placement: "auto",
                trigger: "hover",
                customClass: "popoverStyle",
                content:
                "<p>Information about the event.</p>",
                html: true,
            })
        }}
      />
    </div>
  )
}

export default Calender