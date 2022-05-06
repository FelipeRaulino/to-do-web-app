import React, { useContext } from 'react';
import {
  Route, BrowserRouter as Router, Routes, Navigate,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';

import { AuthContext, AuthProvider } from './context/AuthContext';

function PrivateRoute({ children }) {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

function LoginRedirect({ children }) {
  const user = localStorage.getItem('user');
  if (user) {
    return <Navigate to="/" />;
  }
  return children;
}

function RouterApp() {
  return (
    <Router>
      <AuthProvider>
        <AnimatePresence>
          <Routes>
            <Route
              path="/login"
              element={(
                <LoginRedirect>
                  <LoginPage />
                </LoginRedirect>
              )}
            />
            <Route path="/signup" element={<SignUpPage />} />
            <Route
              path="/"
              element={(
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              )}
            />
          </Routes>
        </AnimatePresence>
      </AuthProvider>
    </Router>
  );
}

export default RouterApp;
