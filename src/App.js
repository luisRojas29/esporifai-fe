import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Login from "./components/Login/Login";
import Player from "./components/Player/Player";
import { selectUser, SET_USER } from "./features/UserSlice";
import { selectToken, SET_TOKEN } from "./features/TokenSlice";
import { getTokenFromURL } from "./spotifyLogic";
import { SET_PLAYLIST } from "./features/PlaylistSlice";

const spotify = new SpotifyWebApi();

function App() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const _token = getTokenFromURL();
    console.log("ENTRA A HOME");
    //const _token = hash.access_token;

    if (_token) {
      dispatch(SET_TOKEN(_token));
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => dispatch(SET_USER(user)));
      spotify
        .getPlaylist("37i9dQZEVXcTsJf0u0OFNB")
        .then((playlist) => dispatch(SET_PLAYLIST(playlist)));
    }
  }, [dispatch]);

  return <div>{user ? <Player /> : <Login />}</div>;
}
// Refactorizar index.js para que react rouder defina las rutas, siendo App el /
export default App;
