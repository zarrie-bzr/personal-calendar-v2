import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Calendar from "./Calendar";
import { supabase } from "./supabaseClient";

// یک کامپوننت برای محافظت از مسیرهای خصوصی
const PrivateRoute = ({ children }) => {
  const user = supabase.auth.user();
  return user ? children : <Navigate to="/" />;
};

const App = () => {
  return (
    <Router>
      <div>
        {/* مسیریابی اصلی */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* محافظت از مسیر /calendar */}
          <Route
            path="/calendar"
            element={
              <PrivateRoute>
                <Calendar />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
