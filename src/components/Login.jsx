import { useState } from "react";
import axios from "axios";
import { PROJECTID } from "../variables";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": PROJECTID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (err) {
      setError("Oops, incorrect credentials.");
    }
  };
  return (
    <div>
      <form className="center" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          placeholder="Password"
          required
        />
        <div className="center">
          <button type="submit" className="button">
            <span className="span">LOG IN</span>
          </button>
        </div>
      </form>
      <h1 className="error">{error}</h1>
    </div>
  );
};
