import { createContext } from "react";

export const DataContext = createContext();


export function DataContextProvider({children}){
  return < DataContext.Provider value={[]}>
    {children}
  </DataContext.Provider>
}
