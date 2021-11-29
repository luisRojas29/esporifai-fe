import { loginURL } from "../../spotifyLogic";
import { LoginButton, LoginContainer } from "./styles";

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
