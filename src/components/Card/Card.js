import React from "react";
import Modal from "../Modal";
import { Container, Title, Archivar } from "./Card.styles";

const Card = ({ title }) => {
	const [show, setShow] = React.useState(false);
	const handleClick = () => {
		setShow(true);
	};
	const modalClose = () => {
		setShow(false);
	};
	return (
		<>
			<Container onClick={handleClick}>
				<Title>{title}</Title>
				<Archivar />
			</Container>
			<Modal title={title} show={show} onClose={modalClose} />
		</>
	);
};

export default Card;
