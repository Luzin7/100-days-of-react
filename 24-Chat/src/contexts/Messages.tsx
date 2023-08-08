import { createContext, useState } from "react";
import MESSAGES from "../data/chatMessages";
import ProviderProps from "../types/Chiildren";
import MessageContextProps from "../types/IMessagesContext";

export const MessagesDataContext = createContext({} as MessageContextProps);

export const MessagesDataProvider = ({ children }: ProviderProps) => {
  const [messages, setMessages] = useState(MESSAGES);

  return (
    <MessagesDataContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessagesDataContext.Provider>
  );
};
