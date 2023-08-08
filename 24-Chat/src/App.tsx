import Chat from "./components/Chat";
import HeaderChat from "./components/HeaderChat";
import InputMessage from "./components/InputMessage";
import { MessagesDataProvider } from "./contexts/Messages";
import { UserDataProvider } from "./contexts/UserData";

function App() {
  return (
    <div className="py-6 px-8">
      <UserDataProvider>
        <HeaderChat />
        <MessagesDataProvider>
          <Chat />
          <InputMessage />
        </MessagesDataProvider>
      </UserDataProvider>
    </div>
  );
}

export default App;
