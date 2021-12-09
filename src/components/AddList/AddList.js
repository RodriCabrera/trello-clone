import React from "react";
import { Container, Input, Button, Form, ButtonGroup } from "./AddList.styles";

const AddList = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Add LIST.");
	};
	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<Input value={"+ Add another list"} />
				<ButtonGroup>
					<Button type="submit">Add List</Button>
					<span>X</span>
				</ButtonGroup>
			</Form>
		</Container>
	);
};

export default AddList;
