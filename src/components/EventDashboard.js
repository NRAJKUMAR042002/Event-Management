import React, { useState, useEffect } from "react";
import API from "../utils/api";
import { io } from "socket.io-client";

const socket = io(process.env.REACT_APP_BACKEND_URL || "http://localhost:5000");

const EventDashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await API.get("/events");
      setEvents(res.data);
    };

    fetchEvents();

    // Real-time update listener
    socket.on("refreshEvent", fetchEvents);

    return () => {
      socket.off("refreshEvent");
    };
  }, []);

  return (
    <div>
      <h2>Event Dashboard</h2>
      {events.map((event) => (
        <div key={event._id}>
          <h3>{event.name}</h3>
          <p>{event.description}</p>
          <p>Date: {new Date(event.date).toLocaleString()}</p>
          <p>Attendees: {event.attendees.length}</p>
        </div>
      ))}
    </div>
  );
};

export default EventDashboard;
