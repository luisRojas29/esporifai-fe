import Body from "../Body/Body";
import { Footer } from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { SpotifyBody } from "./styles";

const Player = () => {
  return (
    <SpotifyBody>
      <Sidebar />
      <Body />
      <Footer />
    </SpotifyBody>
  );
};

export default Player;
