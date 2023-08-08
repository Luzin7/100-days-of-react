import { useContext } from "react";
import { UserDataContext } from "../../contexts/UserData";

export function CurrentChatStatus() {
  const { userName } = useContext(UserDataContext);

  return (
    <>
      <div className="flex flex-col justify-center">
        <span className="text-text font-bold">{userName}</span>
        <span className="text-accent flex text-xs">Online</span>
      </div>
    </>
  );
}
