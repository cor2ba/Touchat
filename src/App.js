import Forms from "./components/Forms";
import { Chat } from "./components/Chat";
import "./App.css";

const App = () => {
  if (!localStorage.getItem("username")) return <Forms />;
  return <Chat />;
};

export default App;
