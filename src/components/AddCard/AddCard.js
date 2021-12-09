import React from "react";
import {
	Button,
	ButtonGroup,
	Container,
	Form,
	TextArea,
} from "./AddCard.styles";

const AddCard = () => {
	const [cardTitle, setCardTitle] = React.useState("");

	const handleChange = (e) => {
		setCardTitle(e.target.value);
	};
	return (
		<Container>
			<Form>
				<TextArea
					placeholder="+ Add a card"
					value={cardTitle}
					onChange={handleChange}
				/>
				<ButtonGroup>
					<Button>Add card</Button>
					<span>X</span>
				</ButtonGroup>
			</Form>
		</Container>
	);
};

export default AddCard;
