import React from "react";
import { Container } from "./Board.styles";
import List from "../List";
import AddList from "../AddList/AddList";
import { useSelector } from "react-redux";

const Board = () => {
	const lists = useSelector((state) => state.lists);
	console.log(lists);

	return (
		<Container>
			{lists.map((l) => (
				<List key={l.id} title={l.title} />
			))}
			<AddList />
		</Container>
	);
};

export default Board;
