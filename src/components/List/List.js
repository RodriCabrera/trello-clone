import React from "react";
import { Container, ListTitle } from "./List.styles";

const List = ({ title }) => {
	return (
		<Container>
			<ListTitle>{title}</ListTitle>
		</Container>
	);
};

export default List;
