import React from "react";
import AddCard from "../AddCard/AddCard";
import {
	Content,
	ColumnTitle,
	Header,
	Wrapper,
	CardList,
	Footer,
} from "./Column.styles";

const Column = ({ title, children, columnId }) => {
	return (
		<Wrapper>
			<Content>
				<Header>
					<ColumnTitle>{title}</ColumnTitle>
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
