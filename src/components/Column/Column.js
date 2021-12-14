import React from "react";
import AddCard from "../AddCard/AddCard";
import ColumnTitleEdit from "./ColumnTitleEdit";
import {
	Content,
	Header,
	Wrapper,
	CardList,
	Footer,
	ListItem,
} from "./Column.styles";
import { useDrop } from "react-dnd";
import OptionsDropdown from "../OptionsDropdown";
import { useDispatch } from "react-redux";
import { archiveColumn, duplicateColumn } from "../../slices/columnsSlice";

const Column = ({ title, children, columnId }) => {
	const [showDrop, setShowDrop] = React.useState(false);

	const [, drop] = useDrop(() => ({
		accept: "CARD",
		drop: () => ({ columnId: columnId }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));
	const dispatch = useDispatch();

	const handleArchive = () => {
		dispatch(archiveColumn(columnId));
	};
	const handleDuplicate = () => {
		dispatch(duplicateColumn(columnId));
		setShowDrop(false);
	};
	return (
		<Wrapper>
			<Content ref={drop} role="Column">
				<Header>
					<ColumnTitleEdit title={title} columnId={columnId} />
					<OptionsDropdown
						title={"List Actions"}
						showDrop={showDrop}
						setShowDrop={setShowDrop}
					>
						<ListItem onClick={handleDuplicate}>Duplicate list</ListItem>
						<ListItem onClick={handleArchive}>Archive this list</ListItem>
					</OptionsDropdown>
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
