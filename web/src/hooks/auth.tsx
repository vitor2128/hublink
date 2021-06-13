/* eslint-disable react/prop-types */
import React, { createContext, useState, useContext } from 'react';

export const TOKEN_KEY = '@hublink:token';
export const NAME = '@hublink:username';

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const userName = (user: any) => {
  localStorage.setItem(NAME, user);
};

interface IAuthContext {
  logged: boolean;
  login(token: any): void;
  logout(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem('@hublink:token');

    return !!isLogged;
  });

  const login = (token: any) => {
    localStorage.setItem(TOKEN_KEY, token);
    setLogged(true);
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(NAME);
    setLogged(false);
  };

  return <AuthContext.Provider value={{ logged, login, logout }}>{children}</AuthContext.Provider>;
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
