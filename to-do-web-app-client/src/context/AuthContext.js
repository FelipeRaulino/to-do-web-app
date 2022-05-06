import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AxiosConnection from '../services/Connecion';

const AuthContext = createContext();

/* eslint-disable react/jsx-no-constructed-context-values, no-console */
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userStorage = localStorage.getItem('user');
    const tokenStorage = localStorage.getItem('token');
    if (userStorage && tokenStorage) {
      setUser(JSON.parse(userStorage));
      AxiosConnection.defaults.headers.Authorization = `Bearer ${tokenStorage}`;
    }
  }, []);

  const Login = async (email, password) => {
    try {
      const response = await AxiosConnection.post('/createSession', { email, password });
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);
      AxiosConnection.defaults.headers.Authorization = `Bearer ${response.data.token}`;
      setUser(response.data.user);
      return navigate('/');
    } catch (error) {
      return toast.error('Email or password invalid', {
        position: 'top-center',
        autoClose: 7000,
      });
    }
  };

  const Logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    return navigate('/login');
  };

  return (
    <AuthContext.Provider value={{
      Login, Logout, user, authenticated: !!user,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
