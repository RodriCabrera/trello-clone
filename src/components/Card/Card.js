import React from "react";
import { Container, Title, Archivar } from "./Card.styles";

const Card = ({ title }) => {
	return (
		<Container>
			<Title>{title}</Title>
			<Archivar />
		</Container>
	);
};

export default Card;
