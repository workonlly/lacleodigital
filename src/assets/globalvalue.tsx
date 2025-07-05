import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext<any>(null);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [globalValue, setGlobalValue] = useState("111");

  return (
    <GlobalContext.Provider value={{ globalValue, setGlobalValue }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
