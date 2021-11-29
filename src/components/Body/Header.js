import { HeaderContainer, HeaderLeft, HeaderRight } from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <SearchIcon />
        <input type="text" placeholder="Search for Artists, Songs or Albums" />
      </HeaderLeft>
      <HeaderRight>
        <Avatar />
        <h4>LuisRojas</h4>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
