import React from 'react';
import { ElctricalInspection, ThermographicInspection } from '../consts/types';
import { initialThermographicData, initalElctricalValue } from '../consts/initailValues';

export interface AppProps {
  pageSelected: string;
  setPageSelected: React.Dispatch<React.SetStateAction<string>>;
  thermographicData: ThermographicInspection;
  setThermographicData: React.Dispatch<React.SetStateAction<ThermographicInspection>>;
  electricalData: ElctricalInspection;
  setElectricalData: React.Dispatch<React.SetStateAction<ElctricalInspection>>;
}

export const AppContext = React.createContext<AppProps>({} as AppProps);

export const pages = {
  ThermographicInspection: 'בדיקה טרמוגראפית',
  ElctricalInspection: 'בדיקת חשמל',
};
const AppProvider = ({ children }: any) => {
  const [pageSelected, setPageSelected] = React.useState<string>(pages.ThermographicInspection);
  const [thermographicData, setThermographicData] = React.useState<ThermographicInspection>(initialThermographicData);
  const [electricalData, setElectricalData] = React.useState<ElctricalInspection>(initalElctricalValue);

  const value = {
    pageSelected,
    setPageSelected,
    thermographicData,
    setThermographicData,
    electricalData,
    setElectricalData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
