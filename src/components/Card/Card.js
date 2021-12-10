import React from "react";
import { useDispatch } from "react-redux";
import CardModal from "../CardModal";
import { Container, Title, Archivar } from "./Card.styles";
import { archiveCard } from "../../slices/cardsSlice";

const Card = ({ title, cardId }) => {
	const [show, setShow] = React.useState(false);
	const dispatch = useDispatch();
	const showModal = () => {
		setShow(true);
	};
	const closeModal = () => {
		setShow(false);
	};
	const handleArchive = (e) => {
		e.stopPropagation();
		dispatch(archiveCard(cardId));
	};
	return (
		<>
			<Container onClick={showModal}>
				<Title>{title}</Title>
				<Archivar onClick={handleArchive} />
			</Container>
			<CardModal
				cardId={cardId}
				title={title}
				show={show}
				onClose={closeModal}
			/>
		</>
	);
};

export default Card;
