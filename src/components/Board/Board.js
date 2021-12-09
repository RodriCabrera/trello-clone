import React from "react";
import { Container } from "./Board.styles";
import Column from "../Column";
import AddColumn from "../AddColumn";
import { useSelector } from "react-redux";
import Card from "../Card";

const Board = () => {
	const columns = useSelector((state) => state.columns);
	const cards = useSelector((state) => state.cards);
	console.log("CARDS", cards);
	console.log(columns);

	return (
		<Container>
			{columns.map((l) => (
				<Column key={l.id} title={l.title}>
					{cards
						.filter((c) => c.inColumn === l.id)
						.map((c) => (
							<Card key={c.id} title={c.title} />
						))}
				</Column>
			))}
			<AddColumn />
		</Container>
	);
};

export default Board;
