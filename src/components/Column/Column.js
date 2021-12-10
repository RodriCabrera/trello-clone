import React from "react";
import AddCard from "../AddCard/AddCard";
import {
	Content,
	ColumnTitle,
	Header,
	Wrapper,
	CardList,
	Footer,
	Puntos,
} from "./Column.styles";

const Column = ({ title, children, columnId }) => {
	return (
		<Wrapper>
			<Content>
				<Header>
					<ColumnTitle>{title}</ColumnTitle>
					<Puntos />
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
