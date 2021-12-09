import React from "react";
import { Container, Title } from "./Card.styles";

const Card = ({ title }) => {
	return (
		<Container>
			<Title>{title}</Title>
		</Container>
	);
};

export default Card;
