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
	const [columnTitle, setListTitle] = React.useState("");
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addColumn(columnTitle));
		setListTitle("");
	};

	const handleChange = (e) => {
		setListTitle(e.target.value);
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
					<span>X</span>
				</ButtonGroup>
			</Form>
		</Container>
	);
};

export default AddList;
