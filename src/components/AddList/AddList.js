import React from "react";
import { useDispatch } from "react-redux";
import { addList } from "../../slices/listSlice";
import { Container, Input, Button, Form, ButtonGroup } from "./AddList.styles";

const AddList = () => {
	const [listTitle, setListTitle] = React.useState("");
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addList(listTitle));
		setListTitle("");
	};

	const handleChange = (e) => {
		setListTitle(e.target.value);
	};
	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<Input
					value={listTitle}
					name="listTitle"
					onChange={handleChange}
					placeholder="+ Add another list"
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
