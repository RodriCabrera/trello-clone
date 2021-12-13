import React from "react";
import { useDispatch } from "react-redux";
import CardModal from "../CardModal";
import { Container, Title, Archivar } from "./Card.styles";
import { archiveCard, switchCard } from "../../slices/cardsSlice";
import { useDrag } from "react-dnd";

const Card = ({ title, cardId }) => {
	const [show, setShow] = React.useState(false);
	const dispatch = useDispatch();

	const [{ isDragging }, drag] = useDrag(() => ({
		type: "CARD",
		item: { cardId },
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			if (item && dropResult) {
				dispatch(switchCard({ cardId, nextCol: dropResult.columnId }));
			}
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
			handlerId: monitor.getHandlerId(),
		}),
	}));
	const opacity = isDragging ? 0 : 1;

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
		<div ref={drag} style={{ opacity: opacity }}>
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
		</div>
	);
};

export default Card;
