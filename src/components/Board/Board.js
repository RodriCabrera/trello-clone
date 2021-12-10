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
			{columns
				.filter((col) => col.isActive)
				.map((col) => (
					<Column key={col.id} title={col.title} columnId={col.id}>
						{cards
							.filter((card) => card.inColumn === col.id)
							.map((card) => (
								<Card key={card.id} title={card.title} />
							))}
					</Column>
				))}
			<AddColumn />
		</Container>
	);
};

export default Board;
