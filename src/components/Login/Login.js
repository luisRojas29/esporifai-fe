import { LoginButton, LoginContainer } from "./styles";

const endpoint = "https://accounts.spotify.com/authorize";
const clientId = "d2c1d25cb8ea4923b3099d299fe82a53";
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
const loginURL = `${endpoint}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&show_dialog=true`;

const Login = () => {
  return (
    <LoginContainer>
      <img
        src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"
        alt="logo"
        className="logo"
      />
      <LoginButton href={loginURL}>Login with Spotify</LoginButton>
    </LoginContainer>
  );
};

export default Login;
