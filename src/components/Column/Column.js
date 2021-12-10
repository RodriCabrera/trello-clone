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
	const handleClick = () => {
		dispatch(archiveColumn(columnId));
		console.log("archivar");
	};
	return (
		<Wrapper>
			<Content>
				<Header>
					<ColumnTitle>{title}</ColumnTitle>
					<Archivar onClick={handleClick} />
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
