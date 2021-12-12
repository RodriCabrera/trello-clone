import React from "react";
import { useDispatch } from "react-redux";
import { editColumnTitle } from "../../../slices/columnsSlice";
import { ColumnTitle } from "./ColumnTitleEdit.styles";

const ColumnTitleEdit = ({ title, columnId }) => {
	const [newTitle, setNewTitle] = React.useState(title);
	const [hasModifications, setHasModifications] = React.useState(false);
	const dispatch = useDispatch();

	const handleChange = (e) => {
		setHasModifications(true);
		setNewTitle(e.target.value);
	};
	const handleEnter = (e) => {
		if (e.code === "Enter") {
			e.target.blur();
		}
	};
	const hangleBlur = () => {
		if (hasModifications) {
			dispatch(editColumnTitle({ id: columnId, title: newTitle }));
			setHasModifications(false);
		}
	};

	return (
		<ColumnTitle
			rows={1}
			value={newTitle}
			onKeyDown={handleEnter}
			onClick={(e) => e.target.select()}
			onBlur={hangleBlur}
			onChange={handleChange}
		/>
	);
};

export default ColumnTitleEdit;
