import Header from "./Header";
import { BodyContainer, Info, InfoText, Songs, Icons } from "./styles";
import { useSelector } from "react-redux";
import { selectPlaylist } from "../../features/PlaylistSlice";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

const Body = () => {
  const playlist = useSelector(selectPlaylist);
  console.log("PL", playlist);
  return (
    <BodyContainer>
      <Header />
      <Info>
        <img src={playlist?.images[0]?.url} alt="imagePlaylist" />
        <InfoText>
          <h4>PLAYLIST</h4>
          <p>{playlist?.name}</p>
        </InfoText>
      </Info>
      <Songs>
        <Icons>
          <PlayCircleFilledIcon className="playButton" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon fontSize="large" />
          {playlist?.tracks?.items.map((item, index) => (
            <SongRow track={item.track} key={index} />
          ))}
        </Icons>
      </Songs>
    </BodyContainer>
  );
};

export default Body;
