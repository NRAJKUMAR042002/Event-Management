import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Auth from "./components/Auth";
import EventDashboard from "./components/EventDashboard";
import EventForm from "./components/EventForm";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/dashboard" element={<EventDashboard />} />
          <Route path="/create-event" element={<EventForm />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
