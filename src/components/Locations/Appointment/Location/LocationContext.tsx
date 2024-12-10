"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface LocationContextType {
  isMainCardSelected: boolean;
  setIsMainCardSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [isMainCardSelected, setIsMainCardSelected] = useState(false);

  return (
    <LocationContext.Provider value={{ isMainCardSelected, setIsMainCardSelected }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocationContext must be used within a LocationProvider");
  }
  return context;
}; 
