import styled from "styled-components";

const SidebarContainer = styled.div`
  height: 90vh;
  background-color: #000;
  display: flex;
  color: #fff;
  flex-direction: column;

  & img {
    height: 50px;
    padding-top: 10px;
  }
`;

const MenuChoices = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Playlists = styled.div`
  margin: 5px 10px;
`;

const Choices = styled.div`
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
  height: 20%;
  cursor: pointer;
  transition: 300ms color ease-in;
  &:hover {
    color: #fff;
  }
  &:nth-child(2) {
    border-right: 5px solid #1da4b9;
  }
  &:nth-child(3) {
    border-right: 5px solid #7d1db9;
  }
  &:nth-child(4) {
    border-right: 5px solid #b9411d;
  }
`;

export { SidebarContainer, MenuChoices, Playlists, Choices };
