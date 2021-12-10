import React from "react";
import {
	Button,
	ButtonGroup,
	Close,
	Container,
	Form,
	TextArea,
} from "./AddCard.styles";
import { useDispatch } from "react-redux";
import { addCard } from "../../slices/cardsSlice";
const AddCard = ({ position }) => {
	const [cardTitle, setCardTitle] = React.useState("");
	const dispatch = useDispatch();

	const handleChange = (e) => {
		setCardTitle(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addCard({ title: cardTitle, position: position }));
		setCardTitle("");
	};
	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<TextArea
					placeholder="+ Add a card"
					value={cardTitle}
					onChange={handleChange}
				/>
				<ButtonGroup>
					<Button>Add card</Button>
					<Close />
				</ButtonGroup>
			</Form>
		</Container>
	);
};

export default AddCard;
