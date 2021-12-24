import { HeaderContainer, HeaderLeft, HeaderRight } from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/UserSlice";

const Header = () => {
  const user = useSelector(selectUser);
  kw;
  return (
    <HeaderContainer>
      <HeaderLeft>
        <SearchIcon />
        <input type="text" placeholder="Search for Artists, Songs or Albums" />
      </HeaderLeft>
      <HeaderRight>
        <Avatar src={user?.images[0]?.url} alt="user" />
        <h4>{user?.id}</h4>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
