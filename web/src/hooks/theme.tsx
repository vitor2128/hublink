import React, { createContext, useState, useContext } from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}

interface ITheme {
  title: string;

  colors: {
    backgroudrgba: string;
    backgroundButtton: string;
    backgroundInput: string;
    backgroundMenu: string;
    backgroundButtonMenu: string;
    boxShadowEstablishment: string;

    text: string;
    textButtton: string;

    danger: string;
    warning: string;
    sucess: string;
  };
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

// eslint-disable-next-line react/prop-types
const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(() => {
    const themeSaved = localStorage.getItem('@QRExpresso:theme');
    const prefersColor = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? dark : light;

    if (themeSaved) {
      return JSON.parse(themeSaved);
    }
    return prefersColor;
  });

  const toggleTheme = () => {
    if (theme.title === 'dark') {
      setTheme(light);
      localStorage.setItem('@QRExpresso:theme', JSON.stringify(light));
    } else {
      setTheme(dark);
      localStorage.setItem('@QRExpresso:theme', JSON.stringify(dark));
    }
  };

  return <ThemeContext.Provider value={{ toggleTheme, theme }}>{children}</ThemeContext.Provider>;
};

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProvider, useTheme };
