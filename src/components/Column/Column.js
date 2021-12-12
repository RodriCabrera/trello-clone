import React from "react";
import { useDispatch } from "react-redux";
import { archiveColumn } from "../../slices/columnsSlice";
import AddCard from "../AddCard/AddCard";
import ColumnTitleEdit from "./ColumnTitleEdit";
import {
	Content,
	Header,
	Wrapper,
	CardList,
	Footer,
	Archivar,
} from "./Column.styles";

const Column = ({ title, children, columnId }) => {
	const dispatch = useDispatch();
	const handleArchive = () => {
		dispatch(archiveColumn(columnId));
	};

	return (
		<Wrapper>
			<Content>
				<Header>
					<ColumnTitleEdit title={title} columnId={columnId} />
					{/* <ColumnTitle
						rows={1}
						value={newTitle}
						onClick={(e) => e.target.select()}
						onBlur={handleTitleBlur}
						onChange={handleTitleChange}
					/> */}
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
