import React from "react";
import { useDispatch } from "react-redux";
import { archiveColumn, duplicateColumn } from "../../slices/columnsSlice";
import {
	Container,
	DropContainer,
	MoreIcon,
	List,
	ListItem,
	Header,
	Close,
	Background,
} from "./OptionsDrop.styles";

const OptionsDrop = ({ columnId }) => {
	const [showDrop, setShowDrop] = React.useState(false);
	const dispatch = useDispatch();

	const handleClose = (e) => {
		e.stopPropagation();
		setShowDrop((s) => !s);
	};
	const handleArchive = () => {
		dispatch(archiveColumn(columnId));
		setShowDrop(false);
	};
	const handleDuplicate = () => {
		dispatch(duplicateColumn(columnId));
		setShowDrop(false);
	};
	return (
		<Container>
			<MoreIcon onClick={handleClose} />
			<Background show={showDrop} onClick={handleClose} />
			<DropContainer show={showDrop}>
				<Header>
					<span>List Actions</span>
					<Close onClick={handleClose} />
				</Header>
				<List>
					<ListItem onClick={handleDuplicate}>Duplicate list</ListItem>
					<ListItem onClick={handleArchive}>Archive this list</ListItem>
				</List>
			</DropContainer>
		</Container>
	);
};

export default OptionsDrop;
