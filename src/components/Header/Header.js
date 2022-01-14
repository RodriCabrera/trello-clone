import React from "react";
import { Container, LogoContainer, LogoText } from "./Header.styles";
import { FaTrello } from "react-icons/fa";
import Search from "../Search";
const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <FaTrello size="1.3rem" style={{ marginLeft: "8px" }} />
        <LogoText>Trello Clone</LogoText>
      </LogoContainer>
      <Search />
    </Container>
  );
};

export default Header;
