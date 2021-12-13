import React from "react";
import { useDispatch } from "react-redux";
import { archiveColumn } from "../../slices/columnsSlice";
import AddCard from "../AddCard/AddCard";
import ColumnTitleEdit from "./ColumnTitleEdit";
import {
	Content,
	Header,
	Wrapper,
	CardList,
	Footer,
	Archivar,
} from "./Column.styles";
import { useDrop } from "react-dnd";

const Column = ({ title, children, columnId }) => {
	const dispatch = useDispatch();

	const handleArchive = () => {
		dispatch(archiveColumn(columnId));
	};

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
					<Archivar onClick={handleArchive} />
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
