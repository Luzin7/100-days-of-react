import MessageProps from "./IMessage";

interface MessageContextProps {
  messages: MessageProps[];
  setMessages: React.Dispatch<React.SetStateAction<MessageProps[]>>;
}

export default MessageContextProps;
