import React, { useContext, useEffect, useState } from 'react';
import distribution from './data/distribution.json'
import guide from './data/guide.json'
import roadmap from './data/roadmap.json'
import { useTranslation } from "react-i18next";

const DataContext = React.createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const { t } = useTranslation();

  const [phases, setPhases] = useState([]);
  const [steps, setSteps] = useState([]);
  const [wallets, setWallets] = useState([]);

  useEffect(() => {
    translate(distribution);
    translate(guide);
    translate(roadmap);

    setPhases(roadmap); 
    setSteps(guide);
    setWallets(distribution);
  }, []);

  const translate = (value) => {
    value.forEach((object) => {
      for (let property in object) {
        if (Number.isInteger(object[property])) { continue; }

        Array.isArray(object[property])
          ? translate(object[property])
          : object[property] = t(`${object[property]}`);
      }
    });
  }

  const value = {
    phases,
    steps,
    wallets
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}