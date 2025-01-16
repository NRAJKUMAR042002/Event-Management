import React, { useState } from "react";
import API from "../utils/api";

const EventForm = () => {
  const [form, setForm] = useState({ name: "", description: "", date: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/events", form);
      alert("Event created successfully!");
    } catch (err) {
      alert(err.response.data.error || "An error occurred.");
    }
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          type="datetime-local"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default EventForm;
