import React from "react";
import { Container } from "./Board.styles";
import Header from "../Header";
import List from "../List";

const initialLists = [
	{
		id: 1,
		title: "Backlog",
		Cards: [],
	},
	{
		id: 2,
		title: "To-do",
		Cards: [],
	},
	{
		id: 3,
		title: "Doing",
		Cards: [],
	},
];

const Board = () => {
	const [lists, setLists] = React.useState(initialLists);

	return (
		<Container>
			{lists.map((l) => (
				<List key={l.id} title={l.title} />
			))}
		</Container>
	);
};

export default Board;
