import React from "react";
import { Container, LogoContainer, LogoText } from "./Header.styles";
import { FaTrello } from "react-icons/fa";
const Header = () => {
	return (
		<Container>
			<LogoContainer>
				<FaTrello style={{ fontSize: "1.5rem", marginLeft: "8px" }} />
				<LogoText>Trello Clone</LogoText>
			</LogoContainer>
		</Container>
	);
};

export default Header;
