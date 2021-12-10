import React from "react";
import { useSelector } from "react-redux";
import {
	Background,
	Container,
	Header,
	Title,
	Body,
	CloseButton,
	Wrapper,
	Subtitle,
} from "./CardModal.styles";

const CardModal = ({ cardId, title, show, onClose, children }) => {
	const [cardTitle, setCardTitle] = React.useState(title);
	const description = useSelector(
		(state) => state.cards.find((c) => c.id === cardId).description
	);
	const handleTitleChange = (e) => {
		setCardTitle(e.target.value);
	};
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
		<Background dim={!show} onClick={onClose}>
			<Container onClick={(e) => e.stopPropagation()}>
				<Wrapper>
					<Header>
						<Title rows={1} value={cardTitle} onChange={handleTitleChange} />
						<CloseButton size="1.2rem" onClick={onClose}>
							CERRAR
						</CloseButton>
					</Header>
					<Body>
						<Subtitle>Description</Subtitle>
						<p>
							{description ? description : "Add a more detailed description"}
						</p>
					</Body>
				</Wrapper>
			</Container>
		</Background>
	);
};

export default CardModal;
