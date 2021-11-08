import React, { useEffect, useState } from "react"
import { getEvents, joinEvent } from "./EventManager.js"

export const EventList = () => {
  const [events, setEvents] = useState([])

  const fetchEvents = () => getEvents().then(eventsData => setEvents(eventsData))

  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <article>
      {
        events.map(event => {
          return <section key={event.id} className="registration">
              <div className="registration__game">{event.game.title}</div>
              <div>{event.description}</div>
              <div>
                  {event.date} @ {event.time}
              </div>
              <button onClick={() => joinEvent(event.id).then(fetchEvents)}>Join Event</button>
              
          </section>
        })
      }
    </article>
  )
}
