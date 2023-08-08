import { useContext, useState } from "react";
import { IoSend } from "react-icons/io5";
import { MessagesDataContext } from "../../contexts/Messages";
import { getCurrentTime } from "../../functions/handleTime";
import MessageProps from "../../types/IMessage";

export function InputMessage() {
  const [inputText, setInputText] = useState<string>("");
  const { setMessages } = useContext(MessagesDataContext);

  const haveDecoration = () => {
    const start = inputText.substring(0, 1);
    const end = inputText.substring(inputText.length - 1);

    if (start === "_" && end === "_") {
      return true;
    }

    return false;
  };

  const handleSendMessage = () => {
    if (!inputText) {
      return;
    }

    const currentTime = getCurrentTime();

    const newMessage: MessageProps = {
      status: "sent",
      message: `${haveDecoration() ? inputText.replace(/_/g, "") : inputText}`,
      timestamp: currentTime,
      decoration: `${haveDecoration() && "underline"}`,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputText("");
  };

  return (
    <>
      <form
        className="flex items-center relative"
        onSubmit={(event) => {
          event.preventDefault();
          handleSendMessage();
        }}
      >
        <input
          type="text"
          placeholder="Digite sua mensagem"
          className="bg-bgSecondary w-full py-2.5 px-4 outline-none text-white rounded-lg"
          value={inputText}
          onChange={({ target }) => setInputText(target.value)}
        />
        <div
          className="bg-bgSecondary flex justify-center items-center py-2.5 px-4 rounded-lg absolute right-0 cursor-pointer"
          onClick={handleSendMessage}
        >
          <IoSend className="text-lg text-white" />
        </div>
      </form>
    </>
  );
}
