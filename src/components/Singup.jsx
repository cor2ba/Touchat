import { useState } from "react";
import axios from "axios";
import { PRIVATEKEY } from "../variables";

export const Singup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Private-Key": PRIVATEKEY,
      },
    };

    const data = {
      first_name: firstname,
      last_name: lastname,
      username: username,
      secret: password,
      email: email,
    };

    try {
      await axios.post("https://api.chatengine.io/users", data, config);

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
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          placeholder="Email"
          required
        />
        <input
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          className="input"
          placeholder="First name"
          required
        />
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          className="input"
          placeholder="Last name"
          required
        />
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
            <span className="span">SING UP</span>
          </button>
        </div>
      </form>
      <h1 className="error">{error}</h1>
    </div>
  );
};
