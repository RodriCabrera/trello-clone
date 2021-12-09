import React from "react";
import { Container } from "./Board.styles";
import Column from "../Column";
import AddColumn from "../AddColumn";
import { useSelector } from "react-redux";
import Card from "../Card";

const Board = () => {
	const columns = useSelector((state) => state.columns);
	console.log(columns);

	return (
		<Container>
			{columns.map((l) => (
				<Column key={l.id} title={l.title}>
					<Card></Card>
				</Column>
			))}
			<AddColumn />
		</Container>
	);
};

export default Board;
