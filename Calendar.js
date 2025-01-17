import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    email: "",
  });

  // گرفتن مناسبت‌های کاربر از دیتابیس
  useEffect(() => {
    const fetchEvents = async () => {
        const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("date", { ascending: true })
        .limit(10);
      
      if (error) console.error("Error fetching events:", error);
      else setEvents(data);
    };

    fetchEvents();
  }, []);

  // افزودن مناسبت جدید
  const handleAddEvent = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("events")
      .insert([newEvent]);

    if (error) {
      console.error("Error adding event:", error.message);
    } else {
      setEvents([...events, data[0]]);
      setNewEvent({ title: "", date: "", email: "" });
    }
  };

  return (
    <div>
      <h2>Your Personal Calendar</h2>

      {/* فرم افزودن مناسبت جدید */}
      <form onSubmit={handleAddEvent}>
        <input
          type="text"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          required
        />
        <input
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Recipient Email"
          value={newEvent.email}
          onChange={(e) => setNewEvent({ ...newEvent, email: e.target.value })}
          required
        />
        <button type="submit">Add Event</button>
      </form>

      {/* لیست مناسبت‌ها */}
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.title} on {new Date(event.date).toLocaleDateString()} - Reminder to: {event.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
