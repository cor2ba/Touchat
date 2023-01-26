import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./ChatFeed";
import { PROJECTID } from "../variables";

export const Chat = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID={PROJECTID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
};
