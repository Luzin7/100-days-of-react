import { MdClose } from "react-icons/md";
import { CurrentChatStatus } from "./CurrentChatStatus";

export function HeaderChat() {
  return (
    <>
      <header className="bg-bgPrimary flex flex-wrap justify-between items-center h-[10vh]">
        <div className="flex gap-4">
          <div className="w-12 h-12 overflow-hidden rounded-full">
            <img
              src="https://thispersondoesnotexist.com/"
              alt="looking for the camera and smiling"
              className="object-cover"
            />
          </div>
          <CurrentChatStatus />
        </div>
        <MdClose className="text-white text-xl cursor-pointer" />
      </header>
    </>
  );
}
