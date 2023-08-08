import { useContext } from "react";
import { MessagesDataContext } from "../../contexts/Messages";
import { UserDataContext } from "../../contexts/UserData";
import { convertTime } from "../../functions/handleTime";

export function Chat() {
  const { userName } = useContext(UserDataContext);
  const { messages } = useContext(MessagesDataContext);

  return (
    <>
      <main className="text-center text-text text-xs flex flex-col justify-evenly">
        <ul className="flex flex-col py-2 justify-start gap-6 overflow-y-scroll scroll-hidden overflow-hidden h-[75vh]">
          <span className="py-5">Hoje - 09:45</span>
          {messages.map((message) => {
            if (message.status === "received") {
              return (
                <li
                  className="flex flex-col gap-2 text-left items-start"
                  key={message.timestamp}
                >
                  <span>{userName} - 09:45</span>
                  <div className=" bg-receivedMsg rounded-r-xl rounded-b-xl p-3.5 max-w-[8rem] md:max-w-[20rem] lg:max-w-[25rem] xl:text-lg">
                    {message.message}
                  </div>
                </li>
              );
            }
            if (message.status === "sent") {
              return (
                <li
                  className="flex flex-col gap-2 text-left items-end"
                  key={message.timestamp}
                >
                  <span>Você - {convertTime(message.timestamp)}</span>
                  <div className="bg-userMsg rounded-t-xl rounded-bl-xl p-3.5 max-w-[10rem] md:max-w-[20rem] lg:max-w-[25rem] xl:text-lg">
                    {message.decoration === "underline" && (
                      <i>{message.message}</i>
                    )}
                    {message.decoration !== "underline" && message.message}
                  </div>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </main>
    </>
  );
}
