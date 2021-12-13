import React from "react";
import {
	Background,
	Container,
	Header,
	CloseButton,
	Wrapper,
} from "./CardModal.styles";
import CardModalDescription from "./CardModalDescription";
import CardModalTitle from "./CardModalTitle";

const CardModal = ({ cardId, title, show, onClose }) => {
	// const description = useSelector(
	// 	(state) => state.cards.find((c) => c.id === cardId).description
	// );

	const escFunction = React.useCallback(
		(event) => {
			if (event.keyCode === 27) {
				onClose();
			}
		},
		[onClose]
	);
	React.useEffect(() => {
		document.addEventListener("keydown", escFunction, false);

		return () => {
			document.removeEventListener("keydown", escFunction, false);
		};
	}, [escFunction]);

	if (!show) return null;
	return (
		<Background onClick={onClose}>
			<Container onClick={(e) => e.stopPropagation()}>
				<Wrapper>
					<Header>
						<CardModalTitle title={title} cardId={cardId} />
						<CloseButton size="1.2rem" onClick={onClose}>
							CERRAR
						</CloseButton>
					</Header>
					<CardModalDescription cardId={cardId} />
					{/* <Body>
						<Subtitle>Description</Subtitle>
						<p>
							{description ? description : "Add a more detailed description"}
						</p>
					</Body> */}
				</Wrapper>
			</Container>
		</Background>
	);
};

export default CardModal;
