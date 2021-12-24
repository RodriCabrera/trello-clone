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
	CardPlaceholder,
} from "./Column.styles";
import { useDrop } from "react-dnd";
import OptionsDropdown from "../OptionsDropdown";
import { useDispatch, useSelector } from "react-redux";
import { archiveColumn, duplicateColumn } from "../../slices/columnsSlice";

const Column = ({ title, children, columnId }) => {
	const [showDrop, setShowDrop] = React.useState(false);

	const [{ isOver, getItem }, drop] = useDrop(() => ({
		accept: "CARD",
		drop: () => ({ columnId }),
		collect: (monitor) => ({
			isOver: monitor.isOver(), // boolean
			getItem: monitor.getItem(), // { cardId: number }
		}),
	}));
	const cards = useSelector((state) => state.cards); // [{card}]
	const dragginCard = cards.find((c) => c.id === getItem?.cardId); // {card} aparece al dragear.
	const isCardInCol = () => dragginCard?.inColumn === columnId; // boolean

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
				<CardList>
					{children}
					{isOver && !isCardInCol() && <CardPlaceholder />}
				</CardList>
				<Footer>
					<AddCard columnId={columnId} />
				</Footer>
			</Content>
		</Wrapper>
	);
};

export default Column;
