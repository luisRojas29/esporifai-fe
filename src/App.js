import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Player from "./components/Player/Player";
import { getTokenFromURL } from "./spotifyLogic";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";
    setToken(hash.access_token);
  }, []);

  return <div>{token ? <Player /> : <Login />}</div>;
}

export default App;
