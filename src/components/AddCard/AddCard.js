import React from "react";
import { Container, TextArea, Button } from "./AddCard.styles";

const AddCard = () => {
	const [isActive, setIsActive] = React.useState(false);
	return (
		<Container>
			{isActive ? (
				<TextArea></TextArea>
			) : (
				<Button onClick={() => setIsActive((s) => !s)}>+ Add a card</Button>
			)}
		</Container>
	);
};

export default AddCard;
