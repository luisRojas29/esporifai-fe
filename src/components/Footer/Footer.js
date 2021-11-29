import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid, Slider } from "@material-ui/core";
import {
  FooterCenter,
  FooterContainer,
  FooterLeft,
  FooterRight,
} from "./styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD5fICr3kFyx7azesdm6s8KHclImkj8UrzJA&usqp=CAU"
          alt="cover"
        />
        <div>
          <h4>Whatever</h4>
          <p>Sting</p>
        </div>
      </FooterLeft>
      <FooterCenter>
        <ShuffleIcon />
        <SkipPreviousIcon />
        <PlayCircleOutlineIcon />
        <SkipNextIcon />
        <RepeatIcon />
      </FooterCenter>
      <FooterRight>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item>
            <Slider />
          </Grid>
        </Grid>
      </FooterRight>
    </FooterContainer>
  );
};
