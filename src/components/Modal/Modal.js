import React from "react";
import {
	Background,
	Container,
	Header,
	Title,
	Body,
	CloseButton,
	Wrapper,
} from "./Modal.styles";

const Modal = ({ title, show, onClose, children }) => {
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
						<Title rows={1}>{title}</Title>
						<CloseButton size="1.2rem" onClick={onClose}>
							CERRAR
						</CloseButton>
					</Header>
					<Body>{children}</Body>
				</Wrapper>
			</Container>
		</Background>
	);
};

export default Modal;
