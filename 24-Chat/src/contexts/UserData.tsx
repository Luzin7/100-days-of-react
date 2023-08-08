import { createContext, useState } from "react";
import { getRandomName } from "../functions/getRandomName";
import ProviderProps from "../types/Chiildren";
import UserData from "../types/IUserData";

export const UserDataContext = createContext({} as UserData);

export const UserDataProvider = ({ children }: ProviderProps) => {
  const [userName, setUserName] = useState(getRandomName());

  return (
    <UserDataContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserDataContext.Provider>
  );
};
