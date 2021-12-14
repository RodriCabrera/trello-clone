import React from "react";
import AddCard from "../AddCard";
import ColumnTitleEdit from "./ColumnTitleEdit";
import { Content, Header, Wrapper, CardList, Footer } from "./Column.styles";
import { useDrop } from "react-dnd";
import OptionsDrop from "../OptionsDrop/OptionsDrop";

const Column = ({ title, children, columnId }) => {
	const [, drop] = useDrop(() => ({
		accept: "CARD",
		drop: () => ({ columnId: columnId }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));

	return (
		<Wrapper>
			<Content ref={drop} role="Column">
				<Header>
					<ColumnTitleEdit title={title} columnId={columnId} />
					<OptionsDrop columnId={columnId} />
				</Header>
				<CardList>{children}</CardList>
				<Footer>
					<AddCard columnId={columnId} />
				</Footer>
			</Content>
		</Wrapper>
	);
};

export default Column;
