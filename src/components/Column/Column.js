import React from "react";
import { useDispatch } from "react-redux";
import { archiveColumn } from "../../slices/columnsSlice";
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
	const dispatch = useDispatch();
	const handleArchive = () => {
		dispatch(archiveColumn(columnId));
		console.log("archivar");
	};
	const handleTitleBlur = () => {
		console.log("Title onblur.");
	};
	return (
		<Wrapper>
			<Content>
				<Header>
					<ColumnTitle
						value={title}
						onClick={(e) => e.target.select()}
						onBlur={handleTitleBlur}
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
