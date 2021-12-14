import React from "react";
import {
	Container,
	DropContainer,
	MoreIcon,
	List,
	Header,
	Close,
	Background,
} from "./OptionsDropdown.styles";

const OptionsDropdown = ({ title, children, showDrop, setShowDrop }) => {
	const handleClose = (e) => {
		e.stopPropagation();
		setShowDrop((s) => !s);
	};

	return (
		<Container>
			<MoreIcon onClick={handleClose} />
			<Background show={showDrop} onClick={handleClose} />
			<DropContainer show={showDrop}>
				<Header>
					<span>{title}</span>
					<Close onClick={handleClose} />
				</Header>
				<List>{children}</List>
			</DropContainer>
		</Container>
	);
};

export default OptionsDropdown;
