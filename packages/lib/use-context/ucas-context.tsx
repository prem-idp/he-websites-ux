import React, { useContext, createContext, useState } from "react";
const initialValue = {
  ucasPoint: 0,
};
const UcasContext = createContext(initialValue);
export const UcasProvider = ({ children }: any) => {
  const [ucasPoint, setUcasPoint] = useState(0);

  return (
    <UcasProvider value={{ ucasPoint, setUcasPoint }}>{children}</UcasProvider>
  );
};

export const useUcas = () => {
  return useContext(UcasContext);
};
