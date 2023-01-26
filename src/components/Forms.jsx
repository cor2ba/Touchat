import { useState } from "react";
import { Login } from "./Login";
import { Singup } from "./Singup"

const Modal = () => {
  const [LS, setLS] = useState(true);

  return (
    <div className="wrapper">
      <div className="leftSite">
        <h1 className="title">Touchat</h1>
        <h1 className="sentence">Your chat.</h1>
        <div className="remember">
          <img className="img" alt="svg" src="image.svg" />
          <h1 className="subtitle">Don´t forget to read</h1>
        </div>
      </div>
      <div className="form">
        <div className="loginorsingup">
          <button onClick={() => setLS(true)} className="singup">
            Sing Up
          </button>
          <button onClick={() => setLS(false)} className="login">
            Log In
          </button>
        </div>
        {LS ? <Singup /> : <Login />}
      </div>
    </div>
  );
};

export default Modal;
