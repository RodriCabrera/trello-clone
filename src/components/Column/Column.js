import React from "react";
import { useDispatch } from "react-redux";
import { archiveColumn, editColumnTitle } from "../../slices/columnsSlice";
import AddCard from "../AddCard/AddCard";
import {
	Content,
	ColumnTitle,
	Header,
	Wrapper,
	CardList,
	Footer,
	Archivar,
} from "./Column.styles";

const Column = ({ title, children, columnId }) => {
	const [newTitle, setNewTitle] = React.useState(title);
	const [hasModifications, setHasModifications] = React.useState(false);
	const dispatch = useDispatch();
	const handleArchive = () => {
		dispatch(archiveColumn(columnId));
		console.log("archivar");
	};
	const handleTitleChange = (e) => {
		setHasModifications(true);
		setNewTitle(e.target.value);
	};
	const handleTitleBlur = (e) => {
		console.log("Title onblur:", e.target.value);
		if (hasModifications) {
			dispatch(editColumnTitle({ id: columnId, title: newTitle }));
			setHasModifications(false);
		}
	};
	return (
		<Wrapper>
			<Content>
				<Header>
					<ColumnTitle
						value={newTitle}
						onClick={(e) => e.target.select()}
						onBlur={handleTitleBlur}
						onChange={handleTitleChange}
					/>
					<Archivar onClick={handleArchive} />
				</Header>
				<CardList>{children}</CardList>
				<Footer>
					<AddCard position={columnId} />
				</Footer>
			</Content>
		</Wrapper>
	);
};

export default Column;
