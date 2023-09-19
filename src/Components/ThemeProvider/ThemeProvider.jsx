import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    mode: "light",
    colors: {
        white: "#ffffff",
        grayishWhite: "#ebebeb",
        lightGrey: "#959eac",
        mediumGrey: "#7c8798",
        mediumBlue: "#2f3841",
        darkBlue: "#252d37",
        veryDarkBlue: '#121417',
      },
  });

  const themeSwitchHandler = () => {
    setTheme((theme) => ({
        ...theme,
        mode: theme.mode === "dark" ? "light" : "dark",
      }));
    document.querySelector("html").setAttribute("data-theme", theme.mode);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeSwitchHandler, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
