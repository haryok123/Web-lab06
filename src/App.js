import './App.css';
import { useCookies } from 'react-cookie';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import LoginForm from './components/LoginForm';
import Weather from './components/Weather';

const App = () => {
  const [cookies] = useCookies(['user']);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={cookies.user ? <Navigate to="/dashboard" /> : <LoginForm />}
        />
        <Route
          path="/dashboard"
          element={cookies.user ? <Weather /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
