import { createContext, useState, useContext } from 'react';

const UcasContext = createContext();

export const UcasProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); 

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <UcasContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </UcasContext.Provider>
  );
};

export const useUCAS = () => {
  return useContext(UcasContext);
};
