import PersonIcon from "@mui/icons-material/Person";
import ListIcon from "@mui/icons-material/List";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SettingsIcon from "@mui/icons-material/Settings";
import SidebarChoice from "./SidebarChoice";
import { SidebarContainer, MenuChoices } from "./styles";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <img
        src="https://1000logos.net/wp-content/uploads/2021/04/Spotify-logo.png"
        alt="logo"
      />
      <MenuChoices>
        <SidebarChoice Icon={PersonIcon} />
        <SidebarChoice Icon={ListIcon} to="/playlists" />
        <SidebarChoice Icon={SearchIcon} />
        <SidebarChoice Icon={LibraryMusicIcon} />
        <SidebarChoice Icon={SettingsIcon} />
      </MenuChoices>
      {/* <Playlists>PLAYLISTS</Playlists>
      <hr />
      <SidebarChoice title="2021 ChillOut" />
      <SidebarChoice title="Dark Metal" /> */}
    </SidebarContainer>
  );
};

export default Sidebar;
