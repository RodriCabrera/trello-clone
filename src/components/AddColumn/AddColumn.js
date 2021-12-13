import React from "react";
import { useDispatch } from "react-redux";
import { addColumn } from "../../slices/columnsSlice";
import {
	Container,
	Input,
	Button,
	Form,
	ButtonGroup,
} from "./AddColumn.styles";

const AddList = () => {
	const [columnTitle, setColumnTitle] = React.useState("");
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addColumn(columnTitle));
		setColumnTitle("");
	};

	const handleChange = (e) => {
		setColumnTitle(e.target.value);
	};
	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<Input
					value={columnTitle}
					name="columnTitle"
					onChange={handleChange}
					placeholder="+ Add another list"
					autoComplete="off"
				/>
				<ButtonGroup>
					<Button type="submit">Add List</Button>
					<span style={{ cursor: "pointer" }}> X </span>
				</ButtonGroup>
			</Form>
		</Container>
	);
};

export default AddList;
