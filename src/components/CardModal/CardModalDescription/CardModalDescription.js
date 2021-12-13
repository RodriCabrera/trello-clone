import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editCardDescription } from "../../../slices/cardsSlice";
import {
	Body,
	Button,
	ButtonGroup,
	Close,
	Description,
	Subtitle,
	Form,
} from "./CardModalDescription.styles";

const CardModalDescription = ({ cardId }) => {
	const description = useSelector(
		(state) => state.cards.find((c) => c.id === cardId).description
	);
	const dispatch = useDispatch();
	const [cardDescription, setCardDescription] = React.useState(description);
	const handleChange = (e) => {
		setCardDescription(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(editCardDescription({ id: cardId, description: cardDescription }));
	};
	const handleClose = (e) => {
		setCardDescription(description);
	};
	return (
		<div>
			<Body>
				<Subtitle>Description</Subtitle>
				<Form onSubmit={handleSubmit}>
					<Description
						value={
							cardDescription
								? cardDescription
								: "Add a more detailed description..."
						}
						onChange={handleChange}
					/>

					<ButtonGroup>
						<Button type="submit">Save</Button>
						<button
							type="button"
							onClick={handleClose}
							style={{ border: "none" }}
						>
							<Close />
						</button>
					</ButtonGroup>
				</Form>
			</Body>
		</div>
	);
};

export default CardModalDescription;
